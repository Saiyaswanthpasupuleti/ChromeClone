import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.main}</Accordion.Header>
     
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          {props.head}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;