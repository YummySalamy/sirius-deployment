
import { useState, useEffect } from "react";

import { Box, Grid, SimpleGrid } from "@chakra-ui/react";

// Custom components
import General from "views/admin/profile/components/General";
import TotalSpent from "views/admin/default/components/TotalSpent";
import Information from "./components/Information";
import { Button, Icon } from '@chakra-ui/react'

// Assets
import React from "react";

export default function Overview() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [experimentFinished, setExperimentFinished] = useState(false);


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <div>
        <SimpleGrid marginBottom={4} columns={3} spacing={2}>
          <Button colorScheme="green" variant="solid" size="md">
            Verificar conexión
          </Button>
          <Button disabled={!isVerified} colorScheme="blue" variant="solid" size="md">
            Iniciar experimento
          </Button>
          <Button disabled={!experimentFinished} colorScheme="blue" variant="solid" size="md">
            Descargar datos
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <Information title = 'Experimento' value = 'Este es la información base del experimento de arriba'/>
      </SimpleGrid>
    </Box>
  );
}
