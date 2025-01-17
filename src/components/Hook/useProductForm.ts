import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../api/categoryApi";
import { fetchSubCategories } from "../api/subCategoryApi";
import { createProducts } from "../api/productApi";

interface ProductFormValues {
  productName: string;
  categoryId: number;
  subCategoryId: number;
  purchasePrice: string;
  totalPrice: string;
  cgst: string;
  sgst: string;
  igst: string;
  totalGst: string;
  priceWoGst: string;
  barcodeNo: string;
  minStockQty: string;
  status: string;
  productType: string;
  transferProduct: string;
  qrDisplay: string;
  srNo: string;
  productImage: File | null;
  getcategory: string[];
  getSubCategory: string[];
  photo:string;
}

const useProductForm = () => {

  const [formValues, setFormValues] = useState<ProductFormValues>({
    productName: "",
    categoryId: 0,
    subCategoryId: 0,
    purchasePrice: "",
    totalPrice: "",
    cgst: "",
    sgst: "",
    igst: "",
    totalGst: "",
    priceWoGst: "",
    barcodeNo: "",
    minStockQty: "",
    status: "",
    productType: "",
    transferProduct: "",
    qrDisplay: "",
    srNo: "",
    productImage: null,
    getcategory: [],
    getSubCategory: [],
    photo:""
  });
  const navigate = useNavigate();

  useEffect(() => {
    handelGetCategories();
    handelGetSubCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const target = e.target as HTMLInputElement;
      const files :any= target.files;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files && files[0] ? files[0] : null,
      }));
      const url = URL.createObjectURL(files[0]);
      setFormValues((prev) => ({
        ...prev,
        photo:url
      }));   
    } 
    
    else {
      const updatedValues = {
        ...formValues,
        [name]: value,
      };
      if (["cgst", "sgst", "igst", "totalPrice"].includes(name)) {
        const totalPrice = parseFloat(updatedValues.totalPrice) || 0;
        const cgst = parseFloat(updatedValues.cgst) || 0;
        const sgst = parseFloat(updatedValues.sgst) || 0;
        const igst = parseFloat(updatedValues.igst) || 0;
        const totalGst = cgst + sgst + igst;
        const priceWoGst = totalPrice / (1 + totalGst / 100);
        updatedValues.totalGst = totalGst.toFixed(2);
        updatedValues.priceWoGst = priceWoGst.toFixed(2);
      }
      setFormValues(updatedValues);
    }
  };

  const handelAddProduct = async () => {
    if (
      typeof formValues.totalGst === "number" &&
      !isNaN(formValues.totalGst)
    ) {
      var cgstAmount:any = formValues.totalGst / 3;
      var sgstAmount :any= formValues.totalGst / 3;
      var igstAmount:any = formValues.totalGst / 3;
    }

    const productData = {
      ProductName: formValues.productName,
      CatId: formValues.categoryId,
      SubCatId: formValues.subCategoryId,
      CgstPer: formValues.cgst,
      SgstPer: formValues.sgst,
      IgstPer: formValues.igst,
      CgstAmt: cgstAmount,
      SgstAmt: sgstAmount,
      IgstAmt: igstAmount,
      GstAmt: formValues.totalGst,
      ProdPrice: formValues.totalPrice,
      Status: formValues.status,
      SrNo: formValues.srNo,
      Photo: formValues.photo ,
      BarcodeNo: formValues.barcodeNo,
      ProdType: formValues.productType,
      Transfer: formValues.transferProduct,
      QrDisplay: formValues.qrDisplay,
      MinQty: formValues.minStockQty,
      PurchasePrice: formValues.purchasePrice,
      checkstatus: formValues.status,
      ProdType2: false,
      ProdId: 0,
      MinPrice: 10,
      CreatedBy: 0,
      ModifiedBy: 0,
      StockQty: 0,
      TempPrdId: 0,
      Display: formValues.qrDisplay,
      push_flag: 0,
      delete_flag: 0,
      Qty: 0,
      Unit: null,
      Assets: 0,
      tempstatus: formValues.status,
    };

    try {
      const response :any = await createProducts(productData)
    
      if (response.status === 200) {
        alert("Product added successfully!");
        navigate("/Products/ViewProducts");
        setFormValues({
          productName: "",
          categoryId: 0,
          subCategoryId: 0,
          purchasePrice: "",
          totalPrice: "",
          cgst: "",
          sgst: "",
          igst: "",
          totalGst: "",
          priceWoGst: "",
          barcodeNo: "",
          minStockQty: "",
          status: "",
          productType: "",
          transferProduct: "",
          qrDisplay: "",
          srNo: "",
          productImage: null,
          getcategory: [],
          getSubCategory: [],
          photo:""
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handelGetCategories = async () => {
    try {
      const response :any = await fetchCategories()
      const data = await response.data;
      setFormValues((prevValues) => ({
        ...prevValues,
        getcategory: data.map((category: { Name: string; id: number }) => ({
          name: category.Name,
          id: category.id,
        })),
      }));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handelGetSubCategories = async () => {
    try {
      const response :any= await fetchSubCategories()
      const data  =  response.data;
      setFormValues((prevValues) => ({
        ...prevValues,
        getSubCategory: data.map(
          (subcategory: { Name: string; id: number }) => ({
            name: subcategory.Name,
            id: subcategory.id,
          })
        ),
      }));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handelAddProduct();
  };

  return {
    formValues,
    handleSubmit,
    handleChange,
  };
};

export default useProductForm;
