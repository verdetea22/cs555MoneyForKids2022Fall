import React from "react";
import "./modules.css";
import { Row, Stack, Container } from "react-bootstrap";
import ModulePreview from "../../components/Modules/Common/ModulePreview";

const ModulesDashboard = () => {
  return (
    <Container>
    <Stack className='col-md-9 mx-auto' gap={3} direction='vertical'>
        <h2 className='text-center'>Learning Modules</h2>
        <Row xs={2} md={4} lg={6} className='justify-content-center'>
          <ModulePreview title={"Salex Tax Module"} description={"Learn how sales tax works!"} link={"salestax"} />
          <ModulePreview title={"Change Back Module"} description={"Learn how to calculate change given from different transactions!"} link={"changeback"} />
          <ModulePreview title={"Interest Module"} description={"Learn how interest works for different types of bank accounts!"} link={"interest"} />
          <ModulePreview title={"Money Addition Module"} description={"Learn how to add moeny easily!"} link={"moneyAddition"} />
          <ModulePreview title={"Bank Forms Module"} description={"Learn the different kinds of forms, such as withdrawl, deposit, and checks!"} link={"forms"} />
          <ModulePreview title={"Bank Account Module"} description={"Learn the different types of bank accounts and their benefits and drawbacks!"} link={"bankaccounts"} />
        </Row>
      </Stack>
    </Container>
  );
};

export default ModulesDashboard;
