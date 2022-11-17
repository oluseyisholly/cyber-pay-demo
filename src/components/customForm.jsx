import React from "react";
import { Form } from "react-bootstrap";

const CustomForm = ({
  as,
  id,
  label,
  type,
  placeholder,
  classStyle,
  onchange,
  value,
  defaultvalue,
  area,
  classGroup,
  size,
}) => {
  const input = ["text", "number", "email", "password", "tel"];
  return (
    <React.Fragment>
      {input.indexOf(type) !== -1 && (
        <Form.Group as={as} controlId={id} required className={classGroup}>
          <Form.Label className="create-text fs-4">{label}</Form.Label>
          <Form.Control
            type={type}
            as={area}
            placeholder={placeholder}
            size={size}
            className={classStyle}
            onChange={(e) => onchange(e.target.value)}
            required
          />
        </Form.Group>
      )}

      {input.indexOf(type) === -1 && (
        <Form.Group as={as} controlId={id}>
          <Form.Label className="create-text fs-4">{label}</Form.Label>
          <Form.Select
            defaultValue={defaultvalue}
            size={size}
            className={classStyle}
            onChange={(e) => onchange(e.target.value)}
          >
            {Array.isArray(value) &&
              value.map((data, index) => {
                return <option key={index}>{data}</option>;
              })}
          </Form.Select>
        </Form.Group>
      )}
    </React.Fragment>
  );
};

export default CustomForm;
