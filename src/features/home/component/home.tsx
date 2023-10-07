"use client";

import { Box, Button, Text, Image, Flex, Card } from "@chakra-ui/react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import React from "react";
import HeadBar from "../../../components/HeadBar";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === cardData.length - 1 ? 0 : prevCard + 1
    );
  };

  const prevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? cardData.length - 1 : prevCard - 1
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const cards = [
    {
      image:
        "https://i.pinimg.com/originals/22/78/74/227874846ea8c3e2774f96f8ea5b34a9.png",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-discussion-abstract-concept-vector-illustration-png-image_6353857.png",
    },
    {
      image:
        "https://i.pinimg.com/originals/22/78/74/227874846ea8c3e2774f96f8ea5b34a9.png",
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-discussion-abstract-concept-vector-illustration-png-image_6353857.png",
    },
  ];

  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Judul Artikel 1",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZla3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 2",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1452696193712-6cabf5103b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVrdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 3",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1597008641621-cefdcf718025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVrdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 4",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627843240167-b1f9d28f732e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZla3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 5",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633773455198-434f4110ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZla3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      title: "Judul Artikel 6",
      description: "Ini adalah description Moduls Lorem ipsum dolor sit amet",
    },
  ];

  const visibleCards = cardData.slice(currentCard, currentCard + 4);
  const isLastCard = currentCard === cardData.length - 1;

  useEffect(() => {
    // Opsi konfigurasi Typed.js
    const options = {
      strings: [
        "Empower Your Mind,",
        "Education is the Key,",
        "Together We Learn, ",
        "Together We Succeed,",
      ],
      typeSpeed: 50, // Kecepatan pengetikan (dalam milidetik)
      // backSpeed: 50,  Kecepatan penghapusan teks (dalam milidetik)
      backDelay: 1000, // Jeda sebelum penghapusan teks (dalam milidetik)
      startDelay: 500, // Jeda sebelum efek dimulai (dalam milidetik)
      loop: true, // Mengulang efek pengetikan
    };

    // Inisialisasi Typed.js
    const typed = new Typed(".typing-element", options);

    // Bersihkan Typed.js ketika komponen unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <HeadBar />
      <Box
        display={"flex"}
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="70vh"
        mt="90px"
        bgImage={
          "https://images.unsplash.com/photo-1638008606285-9407f1700ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
      >
        <Flex
          px={"7"}
          position={"relative"}
          width={"85%"}
          justifyContent={"space-between"}
        >
          <Box w={"50%"} position={"relative"}>
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"4xl"}
              top={"90px"}
              position={"absolute"}
            >
              Let's Learn Together
            </Text>
            <Text
              color={"white"}
              fontWeight={"semibold"}
              fontSize={"4xl"}
              className="typing-element"
              top={"150px"}
              position={"absolute"}
            ></Text>
            <Text
              top={"200"}
              mt={"4"}
              color={"white"}
              fontWeight={"semibold"}
              position={"absolute"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              eaque in magni asperiores doloremque quisquam neque quam nesciunt
              voluptatum, labore corporis, nemo deleniti, excepturi saepe at
              natus exercitationem? Cum, excepturi!
            </Text>
            <Button mx={-1} top={"350px"}>
              Mulai Sekarang
            </Button>
            <Button
              ms={4}
              border={"1px solid white"}
              colorScheme="none"
              top={"350px"}
            >
              Tanya Cs
            </Button>
          </Box>
          <Box
            top={"60px"}
            position={"relative"}
            height={"sm"}
            overflow={"hidden"}
            objectFit={"cover"}
            w={"sm"}
          >
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cards.map((card, index) => (
                <Image key={index} src={`${card.image}`} />
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
      <Box ms={"125px"} width={"85%"} alignItems={"center"} my="4">
        <Text
          color={"blackAlpha.600"}
          fontWeight={"semibold"}
          fontSize={"3xl"}
          top={"90px"}
        >
          Roadmap Belajar
        </Text>
      </Box>
      <Box
        display={"flex"}
        w={"100%"}
        gap={3}
        justifyContent={"center"}
        color={"blackAlpha.100"}
        boxShadow={"md"}
        objectFit={"cover"}
        bgRepeat={"no-repeat"}
        h="70vh"
        p={"5"}
      >
        <Flex
          px={"7"}
          position={"relative"}
          width={"85%"}
          justifyContent={"space-between"}
          gap={"4"}
        >
          <Button
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={prevCard}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          >
            &#10094;
          </Button>
          <Box display="flex" width="100%" overflow="hidden">
            {visibleCards.map((card, index) => (
              <Card
                key={index}
                w="250px"
                maxH="400px"
                position={"relative"}
                borderRadius={"15px"}
                mr={index === visibleCards.length - 1 ? "0" : "20px"} // Jarak antar kartu
              >
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius={"15px"}
                  opacity={0.9}
                  src={card.image}
                />
                <Box
                  p={3}
                  top={"270px"}
                  w="100%"
                  h={"30%"}
                  position={"absolute"}
                >
                  <Link to="/carddetail">
                    <Text
                      color={"white"}
                      fontWeight={"semibold"}
                      fontSize={"3xl"}
                    >
                      {card.title}
                    </Text>
                  </Link>
                  <Text color={"white"}>{card.description}</Text>
                </Box>
              </Card>
            ))}
          </Box>
          <Button
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={nextCard}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            isDisabled={isLastCard}
          >
            &#10095;
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
