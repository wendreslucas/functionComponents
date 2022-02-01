import React, { useState } from 'react'
import { Button, TextField, FormControlLabel, Switch } from '@mui/material'

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } })

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
      }}
    >
      <TextField
        value={nome}
        onChange={event => {
          setNome(event.target.value)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        value={sobrenome}
        onChange={event => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <TextField
        value={cpf}
        onChange={event => {
          setCpf(event.target.value)
        }}
        onBlur={event => {
          const ehValido = validarCPF(event.target.value)
          setErros({ cpf: ehValido })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={event => {
              setPromocoes(event.target.checked)
            }}
            // defaultChecked={promocoes}
          />
        }
        name="promocoes"
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={event => {
              setNovidades(event.target.checked)
            }}
            // defaultChecked={novidades}
          />
        }
        name="novidades"
        label="Novidades"
      />

      <Button type="submit" variant="contained" disableElevation>
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro
