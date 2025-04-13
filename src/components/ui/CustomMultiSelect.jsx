import React from "react";
import Select from "react-select";
import { GridItem, Flex, Image } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";

const CustomMultiSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  isRequired = false,
}) => {
  const formatOptionLabel = ({ label, icon }) => (
    <Flex align="center" gap={2}>
      {icon && (
        <Image src={icon} alt={label} boxSize="20px" borderRadius="full" />
      )}
      {label}
    </Flex>
  );

  return (
    <GridItem colSpan={{ base: 1, md: 1 }} w="100%">
      <Field.Root required={isRequired} style={{ width: "100%" }}>
        {label && (
          <Field.Label>
            {label} {isRequired && <Field.RequiredIndicator />}
          </Field.Label>
        )}
        <Select
          isMulti
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          formatOptionLabel={formatOptionLabel}
          styles={{
            container: (provided) => ({
              ...provided,
              width: "100%",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "var(--White-5, rgba(255, 255, 255, 0.05))",
              borderColor: "rgba(255, 255, 255, 0.1)",
              color: "#FFFFFF",
              zIndex: 9999,
              backdropFilter: "blur(90px)",
              borderRadius: "12px",
              minHeight: "44px",
              width: "100%",
              cursor: "pointer"
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "var(--White-5, rgba(255, 255, 255, 0.05))",
              color: "#FFFFFF",
              zIndex: 9999,
              backdropFilter: "blur(90px)",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? "var(--White-5, rgba(255, 255, 255, 0.05))"
                : "transparent",
              color: "#FFFFFF",
              zIndex: 9999,
              ":hover": {
                backgroundColor: "grey",
                cursor: "pointer",
              },
            }),
            multiValue: (provided) => ({
              ...provided,
              backgroundColor: "var(--White-5, rgba(255, 255, 255, 0.05))",
              zIndex: 9999,
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: "#FFFFFF",
              zIndex: 9999,
            }),
            multiValueRemove: (provided) => ({
              ...provided,
              color: "#FFFFFF",
              ":hover": {
                backgroundColor: "var(--White-5, rgba(255, 255, 255, 0.05))",
              },
              zIndex: 9999,
            }),
          }}
        />
      </Field.Root>
    </GridItem>
  );
};

export default CustomMultiSelect;
