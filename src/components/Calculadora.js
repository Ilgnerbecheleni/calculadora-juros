import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Input } from '@rneui/base';

const Calculadora = () => {
    const [valorMontante, setValorMontante] = useState('');
    const [taxaJuros, setTaxaJuros] = useState('');
    const [tempo, setTempo] = useState('');
    const [resultado, setResultado] = useState('');
    const [resultadoTotal, setResultadoTotal] = useState('');

    const calcularJurosSimples = () => {
        const montante = parseFloat(valorMontante);
        const taxaMensal = parseFloat(taxaJuros);
        const tempoEmMeses = parseInt(tempo);
    
        if (!isNaN(montante) && !isNaN(taxaMensal) && !isNaN(tempoEmMeses)) {
          const jurosSimples = (montante * (taxaMensal / 100) * tempoEmMeses);
          const total = montante + jurosSimples;
          setResultado(`Valor dos juros: R$ ${jurosSimples.toFixed(2)}`);
          setResultadoTotal(`Valor total: R$ ${total.toFixed(2)}`);
        } else {
          setResultado('Por favor, insira valores válidos.');
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <Input
                    inputContainerStyle={styles.input}
                    placeholderTextColor='#000'
                    leftIconContainerStyle={styles.iconContainer}
                    placeholder='R$ Valor montante'
                    value={valorMontante}
                    onChangeText={(text) => setValorMontante(text)}
                    leftIcon={<Icon
                        name='cash-outline'
                        type='ionicon'
                        color='#000'
                    />}
                />

                <Input
                    inputContainerStyle={styles.input}
                    placeholderTextColor='#000'
                    leftIconContainerStyle={styles.iconContainer}
                    placeholder='% Taxa de juros mensal'
                    value={taxaJuros}
                    onChangeText={(text) => setTaxaJuros(text)}
                    leftIcon={<Icon
                        name='bar-chart-outline'
                        type='ionicon'
                        color='#000'
                    />}
                />

                <Input
                    inputContainerStyle={styles.input}
                    placeholderTextColor='#000'
                    leftIconContainerStyle={styles.iconContainer}
                    placeholder='tempo em meses'
                    value={tempo}
                    onChangeText={(text) => setTempo(text)}
                    leftIcon={<Icon
                        name='schedule'
                        type='material-icons'
                        color='#000'
                    />}
                />
                <Text style={styles.resultado}>{resultado}</Text>
                <Text style={styles.resultado}>{resultadoTotal}</Text>
                <TouchableOpacity style={styles.botao} onPress={calcularJurosSimples}>
                    <Text style={styles.textobotao}>Calcular</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Calculadora

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'space-evenly',

        flex: 1
    },
    resultado: {
        margin: 20,
        fontSize: 24,
        textAlign: 'left',
        width: '100%',
    },
    botao: {
        width: 100,
        backgroundColor: '#3F51B5',
        padding: 8,
        width: 360,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    input: {
        width: 340,
        height: 50,
        color: 'white',

    },
    inputs: {

        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    textobotao: {
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 1.6
    },
    iconContainer: {
        marginRight: 8
    }
})