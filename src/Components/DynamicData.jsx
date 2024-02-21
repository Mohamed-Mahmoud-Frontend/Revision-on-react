import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DynamicData = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
      document.title = ` Product | Dynamic Data ${count}`
  }, [count]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {product && (
        <Box
          bg="#fff"
          boxShadow="xl"
          mx={"auto"}
          flexDirection={"column"}
          maxW={"400px"}
          rounded={"md"}
          p={4}
          color="white"
          display={"flex"}
          alignItems={"start"}
          gap={"5px"}
          justifyContent={"center"}
          mb="4"
        >
          <Image
            w="400px"
            h="200px"
            src={product.image}
            alt="product image"
            mb="3"
          />

          <Text
            fontWeight={"bold"}
            fontSize={"xl"}
            fontFamily={"sans-serif"}
            color={"#1A202C"}
            as={"p"}
            mb='1'
          >
            {product.title}
          </Text>
          <Text
            fontSize={"md"}
            fontFamily={"sans-serif"}
            color={"#1A202C"}
            as={"span"}
            mb='1'
          >
            {product.description}
          </Text>
          <Box gap={"5px"} display={"flex"}
          mb='1'>
            <IconButton onClick={()=> setCount(count + 1)}  aria-label="Search database" icon={<ArrowBackIcon />} />
            <IconButton onClick={()=> setCount(count === 1 ? 1 : count - 1 )}
              aria-label="Search database"
              icon={<ArrowForwardIcon />}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default DynamicData;
