import { Table, Icon, Modal, Button, Header, Form ,menu} from "semantic-ui-react";
import { useEffect, useState } from "react";

import axios from 'axios';

const FormModal = ({ IsOpen, closeModal }) => {
  
const [formData,setFormData] = useState({name:"",description:""});
const [nameIsvalid,setIsNamevalid] = useState(false)
const [descriptionIsvalid,setIsDescriptionvalid] = useState(false)

  const validateName = (nameForValidation)=>{
    if(nameForValidation !== ""){
      return false
    } else{
      return "name is required"
    }
  }

  const validateDescription=(desForValidation)=>{
    if (desForValidation !== ""){
    return false
  } else{
    return "Description is required"
  }}
  
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((prevFormData)=>({
      ...prevFormData,
      [name]:value,
    }));

    if(nameIsvalid){
      setIsNamevalid(validateName(formData.name))
    }

    if(descriptionIsvalid){
      setIsDescriptionvalid(validateDescription(formData.description))
    }

  };

  const handleCnacle = () => {
    setFormData({name:"",description:""})
    closeModal()
    setIsNamevalid(false)
    setIsDescriptionvalid(false)
  }
  
  const handleNameValidation = () => {
    setIsNamevalid(validateName(formData.name))
  }

  const handleDescriptionValidation = () => {
    setIsDescriptionvalid(validateDescription(formData.description))
      
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {

      if(!nameIsvalid && !descriptionIsvalid){
        return
      }

      const response = await axios.post("http://localhost:3200/api/category",formData)
      console.log(response.data)
    } catch (error) {
      console.error("error in posting data",error)
    }
  }

  if (!IsOpen) return null;

  const element = (
    <Modal
      closeIcon
      open={IsOpen}
      size="mini"
      onClose={closeModal}
      onOpen={closeModal}
      header="Enter product details"
    >
      <Modal.Header>add new category</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input 
              error={nameIsvalid}
              label="category title"
              placeholder="ennter sutable title"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur = {handleNameValidation}
            ></Form.Input>
          </Form.Group>

          <Form.Group>
            <Form.TextArea 
              error={descriptionIsvalid}

              label="description"
              placeholder="description..."
              name="description"
              value={formData.description}
              onChange={handleChange}
              onBlur = {handleDescriptionValidation}

            ></Form.TextArea>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={handleCnacle}>
          <Icon name="cancel" /> cancel
        </Button>
        <Button color="green">
          <Icon name="save" onClick={handleSubmit} /> Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
  return element;
};

const CategoryMaster = () => {

    const [IsOpen, setIsOpen] = useState(false);
    const [categoryData, setData] = useState([]);
  
  
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/api/category");
        setData(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    useEffect(() => {fetchData();}, []);
  
  
    const handleOpenModal = () => {
      setIsOpen(!IsOpen);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    const element = (
      <div>
        <FormModal IsOpen={IsOpen} closeModal={handleCloseModal}></FormModal>
  
        <div className="table">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>index</Table.HeaderCell>
                <Table.HeaderCell>category</Table.HeaderCell>
                <Table.HeaderCell>description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {categoryData.map((item) => {
                return(
                  <Table.Row key={item._id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.description}</Table.Cell>
                   
                    <Table.Cell>
                      <a onClick={handleOpenModal}>
                        <Icon link name="pencil" className="btn blue"></Icon>
                      </a>
                      <Icon link name="trash" className="btn red"></Icon>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    );

    return element;
}

export default CategoryMaster;