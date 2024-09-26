export const InputField = (props) => {
    const { placeholder, value, onchange, Lable } = props;
    return (
      <div>
        <input
          placeholder={placeholder ? placeholder : ""}
          style={{
            padding: "10px",
            border: "1px solid grey 0.4",
            margin: "10px",
            width: "400px",
            borderRadius: "5px",
          }}
        />
      </div>
    );
  };