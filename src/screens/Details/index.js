import React, { useState } from 'react';

import { 
    View 
} from 'react-native';

import {
    Button, 
    Title, 
    Paragraph, 
    TextInput, 
    Snackbar
} from 'react-native-paper';

function Details({navigation})
{

    const [name, setName] = useState('');

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    return (
        <>
            <Title>
                Título da tela
            </Title>
            <Paragraph>
                Olá Mundo: Conteúdo da Screen Detalhes
            </Paragraph>

            <TextInput 
                mode="outlined"
                label="Nome de usuário" 
                value={name}
                onChangeText={text => setName(text)}
            />
            
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Me aperta
            </Button>

            <Button onPress={onToggleSnackBar}>{visible ? 'Esconder' : 'Visualizar'}</Button>

            <Button
                mode="contained"
                onPress={() => navigation.push(
                    'Details', 
                    {
                        itemId: 86,
                        otherParam: 'anything you want here'
                    })
                }
            > 
                Ir para Página de Detalhes
            </Button>

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                label: 'Fechar',
                onPress: () => {
                },
                }}>
                Olá mundo, você clicou aqui...
            </Snackbar>
        </>
    );
}


export default Details;