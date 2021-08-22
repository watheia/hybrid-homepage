import React, { useEffect, useState } from "react"

import { Message } from "@hybrid-homepage/api-interfaces"
import { HybridHomepage, SupportPage } from "@hybrid-homepage/content"
import classes from "./app.module.scss"
import { Box, Container, Typography, Link } from "@material-ui/core"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://watheia.app/">
        Watheia Labs, LLC.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: "" })

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setMessage)
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <HybridHomepage />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800]
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default App
