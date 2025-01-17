import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import { SubCategory } from '../types/SubCategory';
import { Category } from '../types/Category';

interface ModalFormProps {
  showModal: boolean; // Controls modal visibility
  onClose: () => void; // Handles modal close action
  onSubmit: () => void; // Handles form submission
  isSubmitting: boolean; // Submission state for the form
  modalType: 'subcategory' | 'category'; // Distinguish between SubCategory and Category modal
  currentSubCategory?: SubCategory | null; // Optional: For SubCategory editing
  setCurrentSubCategory?: React.Dispatch<React.SetStateAction<SubCategory | null>>; // Optional: SubCategory setter
  categoryOptions?: { value: number; label: string }[]; // Optional: Category options for SubCategory modal
  currentCategory?: Category | null; // Optional: For Category editing
  setCurrentCategory?: React.Dispatch<React.SetStateAction<Category | null>>; // Optional: Category setter
}

const ModalForm: React.FC<ModalFormProps> = ({
  showModal,
  onClose,
  onSubmit,
  isSubmitting,
  modalType,
  currentSubCategory,
  setCurrentSubCategory,
  categoryOptions,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalType === 'subcategory' ? 'Edit SubCategory' : 'Edit Category'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* SubCategory Modal */}
          {modalType === 'subcategory' && currentSubCategory && setCurrentSubCategory && categoryOptions && (
            <>
              <Form.Group controlId="subcategoryCategory">
                <Form.Label>Select Category *</Form.Label>
                <Select
                  options={categoryOptions}
                  value={categoryOptions.find((option) => option.value === currentSubCategory.catid) || null}
                  onChange={(selectedOption) =>
                    setCurrentSubCategory((prev) =>
                      prev ? { ...prev, catid: selectedOption?.value || prev.catid } : prev
                    )
                  }
                  placeholder="Select Category"
                />
              </Form.Group>

              <Form.Group controlId="subcategoryName" className="mt-3">
                <Form.Label>SubCategory Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter SubCategory Name"
                  value={currentSubCategory.name || ''}
                  onChange={(e) =>
                    setCurrentSubCategory((prev) =>
                      prev ? { ...prev, name: e.target.value } : prev
                    )
                  }
                  required
                />
              </Form.Group>
            </>
          )}

          {/* Category Modal */}
          {modalType === 'category' && currentCategory && setCurrentCategory && (
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                value={currentCategory.name || ''}
                onChange={(e) =>
                  setCurrentCategory((prev) =>
                    prev ? { ...prev, name: e.target.value } : prev
                  )
                }
                required
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={onSubmit}
          disabled={
            isSubmitting ||
            (modalType === 'subcategory' && (!currentSubCategory?.name || !currentSubCategory?.catid)) ||
            (modalType === 'category' && !currentCategory?.name)
          }
        >
          {isSubmitting ? 'Updating...' : 'Update'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
