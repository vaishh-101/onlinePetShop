import { React, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const dummyRecords1 = [
  {
    id: 1,
    image:
      "https://supertails.com/cdn/shop/products/Frame11912-276315_1800x1800.png?v=1696557632",
    title:
      "MSD Animal Health Bravecto Dog Tick and Flea Control Tablet (pack of 1 tablet)",
      price: (
        <p>
          ₹1900, MRP <s> ₹2,000</s>
        </p>
      ),
  },
  {
    id: 2,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_14_1800x1800.png?v=1696444958",
    title:
      "Skyec Skyworm Cat Deworming Tablet",
    price: "MRP ₹170",
  },
  {
    id: 3,
    image:
      "https://supertails.com/cdn/shop/products/Pharmacy_7-122490_1800x1800.png?v=1696543477",
    title: "Intas Eazypet Dog Deworming Tablet",
    price: "MRP ₹360",
  },
  {
    id: 4,
    image:
 "https://supertails.com/cdn/shop/products/Pharmacy_93-680885_1800x1800.png?v=1696449274",
    title: "Intas Pomisol Ear Drops",
    price: "MRP ₹75",
  },
  {
    id: 5,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_95_1800x1800.png?v=1696449325",
    title: "Virbac Epiotic Ear Cleanser",
    price: "MRP ₹250",
  }, 
  {
    id: 6,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_84_60bdb3d3-37b1-4a73-a80e-85675333d340_1800x1800.png?v=1696448921",
    title: "Virbac Ostopet Calcium Supplement Syrup for Dogs and Cats",
    price: "MRP ₹80",
  },
  {
    id: 7,
    image:
      "https://supertails.com/cdn/shop/products/Pharmacy_60_d03518f9-bc73-477c-9b10-5f9f9f6e80ee-609472_1800x1800.png?v=1696450199",
    title:
      "Iris Yafa Gold Coat Omega 3 + 6 Syrup for Dogs and Cats",
      price: "MRP ₹380",
  },
  {
    id: 8,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_30_1800x1800.png?v=1696632610",
    title: "Virbac Effipro Tick and Flea Control Spray",
    price: "MRP ₹406",
  },
  {
    id: 9,
    image:
      "https://supertails.com/cdn/shop/products/Pharmacy_61-922512_1800x1800.png?v=1696446774",
    title: "Intas Conaseb Shampoo",
    price: "MRP ₹200",
  },
  {
    id: 10,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_12_6587c231-c3de-4b6c-b6fe-639eb77a5c01_1800x1800.png?v=1696449441",
    title: "Vivaldis Condrovet Force HA",
    price: "MRP ₹561",
  },
  {
    id: 11,
    image:
      "https://supertails.com/cdn/shop/files/Frame12276.png?v=1696450180",
    title: "Virbac Nutrich Multi Vitamin Tablets for Dogs and Cats",
    price: "MRP ₹258",
  },
  {
    id: 12,
    image:
      "https://supertails.com/cdn/shop/products/Pharmacy_19_0dc31239-61d8-4118-8526-cdb4ef479592-672056_1800x1800.png?v=1696495854",
    title:
      "Dyntec Hexia Tablet",
      price: "MRP ₹2080",
  },
  {
    id: 13,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_40_fcddbdb6-3e10-4bf8-9b8c-b7139bec74fa_1800x1800.png?v=1696447789",
    title: "Vetina Canigest Probiotic Gastrointestinal Paste for Dogs & Cats",
    price: "MRP ₹1350",
  },
  {
    id: 14,
    image:
      "https://supertails.com/cdn/shop/files/Pharmacy_60_1800x1800.png?v=1696446747",
    title: "Petcare Petben Shampoo",
    price: "MRP ₹470",
  },
  {
    id: 15,
    image:
      "https://supertails.com/cdn/shop/files/Frame12286.png?v=1696450549",
    title: "Savavet Advaplat Syrup",
    price: "MRP ₹300",
  },
  {
    id: 16,
    image:
      " https://supertails.com/cdn/shop/files/Pharmacy_54_1800x1800.png?v=1696446228",
    title: "Vivaldis Viv Silky Shampoo",
    price: "MRP ₹250",
  },
];

const HealthCare = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProductCount, setSelectedProductCount] = useState(0); 
  const { incrementCounter, selectedProducts, setSelectedProducts } = props;


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = dummyRecords1.filter((record) => {
    return record.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchBarStyle = {
    marginTop: "20px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '300px', 
    fontSize: '24px',
    border: '1px solid black', 
    borderRadius: '5px', 
    padding: '10px', 
  };

  const handleAddToCart1 = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
    setSelectedProductCount(selectedProductCount + 1);
    incrementCounter();
  };

  return (
    <>
    <div style={searchBarStyle}>
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearch}
      style={inputStyle}
    />
    </div>
      <Grid container spacing={2} marginTop={2}>
        {filteredRecords.map((record) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
            <Paper
              style={{
                padding: 16,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={record.image}
                alt={record.title}
                style={{ width: "80%", height: "auto", marginBottom: "8px" }}
              />
              <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
                {record.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {record.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "8px", width: "80%" }}
                onClick={() => handleAddToCart1(record)}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </>
  );
};

export default HealthCare;
