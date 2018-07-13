"use strict";

// const cities = [
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '',
//     city: 'ROSARIO'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '0',
//     city: 'VILLA CONSTITUCION'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '0',
//     city: 'OTRAS PROVINCIAS'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '0',
//     city: 'PROVINCIA DE BUENOS AIRES'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '0',
//     city: '(NO ESPECIFICA)'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '0000',
//     city: 'QUINTA'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '2000      ',
//     city: 'ROSARIO'
//   },
//   {
//     code: '000',
//     department: '(NO ESPECIFICA)',
//     zip: '2300',
//     city: 'VENADO TUERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '',
//     city: 'BORREGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '0',
//     city: 'ALICIA MOREAU DE JUSTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '0',
//     city: 'JAURETCHE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '0',
//     city: 'CARLOS CALVO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '0',
//     city: 'CANGALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '0',
//     city: 'FELIPE VALLESE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1001',
//     city: 'ALEM LEANDRO N. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1001',
//     city: 'DE LAS CATALINAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1001',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1001',
//     city: 'DELLA PAOLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1001',
//     city: 'ROJAS RICARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1002',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1002',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1003',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1003',
//     city: 'ALEM LEANDRO N. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1004',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1005',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1005',
//     city: 'GUEMES GALERIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1006',
//     city: 'MAIPU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1006',
//     city: 'BASAVILBASO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1007',
//     city: 'ARROYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1007',
//     city: 'ESMERALDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1008',
//     city: 'SUIPACHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1009',
//     city: 'PELLEGRINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1009',
//     city: 'CARABELAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1010',
//     city: 'CERRITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1010',
//     city: 'ARMAUER HANSEN GERARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1011',
//     city: 'PELLEGRINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1011',
//     city: 'POSADAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1011',
//     city: 'SUIPACHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1012',
//     city: 'LIBERTAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1013',
//     city: 'TALCAHUANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1014',
//     city: 'TALCAHUANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1014',
//     city: 'QUINTANA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1014',
//     city: 'PARERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1014',
//     city: 'ALVEAR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1015',
//     city: 'RIVAROLA RODOLFO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1015',
//     city: 'URUGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1016',
//     city: 'URUGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1016',
//     city: 'LIBERTAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1016',
//     city: 'GUIDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1017',
//     city: 'PARANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1018',
//     city: 'PARANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1018',
//     city: 'LOPEZ VICENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1018',
//     city: 'LAS HERAS GENERAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1018',
//     city: 'MONTEVIDEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1019',
//     city: 'MONTEVIDEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1019',
//     city: 'DEL CARMEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1020',
//     city: 'DELLEPIANE LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1020',
//     city: 'PIZZURNO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1020',
//     city: 'RODRIGUEZ PEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1021',
//     city: 'RODRIGUEZ PEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1021',
//     city: 'MONTEVIDEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1022',
//     city: 'CALLAO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1023',
//     city: 'CALLAO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1024',
//     city: 'CALLAO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1025',
//     city: 'AYACUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1025',
//     city: 'RIOBAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1026',
//     city: 'AYACUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1026',
//     city: 'JUNIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1027',
//     city: 'URIBURU JOSE EVARISTO PRESIDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1028',
//     city: 'PASTEUR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1029',
//     city: 'AZCUENAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1030',
//     city: 'LARREA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1031',
//     city: 'CASTELLI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1031',
//     city: 'PASO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1032',
//     city: 'PUEYRREDON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1032',
//     city: 'CASTELLI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1033',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1034',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1034',
//     city: 'COLOMBO CARLOS AMBROSIO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1034',
//     city: 'HUERGO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1035',
//     city: 'ESMERALDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1035',
//     city: 'DIAGONAL NORTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1035',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1036',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1037',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1037',
//     city: 'DE LA PIEDAD PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1037',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1038',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1039',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1040',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1041',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1042',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1042',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1043',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1043',
//     city: 'NEWTON FAUSTO R. ING. (PASAJE SUBTERRANEO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1043',
//     city: 'GALERIA JUAN DE GARAY (SUBSUELO OBELISCO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1043',
//     city: 'GALERIA OBELISCO (SUBSUELO OBELISCO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1044',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1044',
//     city: 'CORRIENTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1045',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1045',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1046',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1046',
//     city: 'GOMEZ VALENTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1047',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1048',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1049',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1050',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1051',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1051',
//     city: 'RAUCH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1051',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1052',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1052',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1053',
//     city: 'VIAMONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1053',
//     city: 'TOSCANINI ARTURO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1054',
//     city: 'TRES SARGENTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1054',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1055',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1055',
//     city: 'VIAMONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1056',
//     city: 'VIAMONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1056',
//     city: 'SAN LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1057',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1058',
//     city: 'ALVEAR MARCELO T. DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1059',
//     city: 'CABRAL SARGENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1059',
//     city: 'SANTA FE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1060',
//     city: 'SANTA FE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1060',
//     city: 'ALVEAR MARCELO T. DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1061',
//     city: 'ARENALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1061',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1062',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1062',
//     city: 'JUNCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1063',
//     city: 'GARAY JUAN DE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1063',
//     city: 'BRASIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1063',
//     city: 'PASEO COLON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: 'SAN JUAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: 'SAN LORENZO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: 'BALCARCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: 'COCHABAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: '5 DE JULIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1064',
//     city: 'GIUFFRA JOSE MODESTO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1065',
//     city: 'DEFENSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1066',
//     city: 'BOLIVAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1067',
//     city: 'DIAGONAL SUD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1067',
//     city: 'PERU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1067',
//     city: 'ROCA JULIO A. PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1068',
//     city: 'PERU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1069',
//     city: 'CHACABUCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1070',
//     city: 'PIEDRAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1071',
//     city: 'TACUARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1072',
//     city: 'IRIGOYEN BERNARDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1073',
//     city: 'LIMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1074',
//     city: 'SALTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1075',
//     city: 'SANTIAGO DEL ESTERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1076',
//     city: 'SAN JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1077',
//     city: 'VIRREY CEVALLOS (VER CEVALLOS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1077',
//     city: 'CEVALLOS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1078',
//     city: 'SOLIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1078',
//     city: 'JUAN DIAZ DE SOLIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1079',
//     city: 'COMBATE DE LOS POZOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1079',
//     city: 'ENTRE RIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1080',
//     city: 'ENTRE RIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1080',
//     city: 'COMBATE DE LOS POZOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1081',
//     city: 'SARANDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1081',
//     city: 'RINCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1081',
//     city: 'PASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1082',
//     city: 'PICHINCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1082',
//     city: 'ALBERTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1082',
//     city: 'MATHEU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1083',
//     city: 'MISIONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1083',
//     city: 'JUJUY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1083',
//     city: 'SAAVEDRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1084',
//     city: 'ROVERANO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1084',
//     city: 'MAIPU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1084',
//     city: 'DE MAYO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1085',
//     city: 'DE MAYO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1085',
//     city: 'BAROLO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1086',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1087',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1088',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1089',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1090',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1090',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1090',
//     city: 'ADOLFO ALSINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1091',
//     city: 'MORENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1092',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1093',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1093',
//     city: 'MORENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1094',
//     city: 'MORENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1094',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1095',
//     city: 'VENEZUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1096',
//     city: 'VENEZUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1096',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1097',
//     city: 'MEXICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1098',
//     city: 'CHILE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1099',
//     city: 'INDEPENDENCIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1100',
//     city: 'INDEPENDENCIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1100',
//     city: 'MEXICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1100',
//     city: 'CHILE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1101',
//     city: 'ESTADOS UNIDOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1102',
//     city: 'CALVO CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1103',
//     city: 'DE LA FERIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1103',
//     city: 'BETHLEM'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1103',
//     city: 'HUMBERTO I"'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'GENDARMERIA NACIONAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'FELS PABLO CABO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'MARTINEZ ZUVIRIA GUSTAVO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'LUISONI ARTURO PEDRO MAYOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'ANTARTIDA ARGENTINA AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'ANTEPUERTO AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'DE LOS INMIGRANTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'EDISON TOMAS A. AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'CASTILLO RAMON S. PRESIDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'CORBETA URUGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'ZANNI PEDRO L. COMODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'RAMOS MEJIA JOSE MARIA DR. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'PY COMODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1104',
//     city: 'QUARTINO JOSE N. INGENIERO AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1106',
//     city: 'ROSALES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1106',
//     city: 'BOUCHARD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1106',
//     city: 'MADERO EDUARDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'LAVAYSSE BENJAMIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'LA RABIDA NORTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'LA RABIDA SUR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'LAFONE QUEVEDO SAMUEL (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'MITRE Y VEDIA BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'MORENO FRANCISCO P. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'NOEL CARLOS M. INTENDENTE (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'ESPAÑA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'HUERGO INGENIERO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'BRASIL (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'CALABRIA (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'BELGRANO AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'BARILARI ATILIO SIXTO ALTE. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'BALBIN JOSE CELEDONIO (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'AZOPARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'ACHAVAL RODRIGUEZ TRISTAN DR. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'CORREA BENITO TENIENTE DE FRAGATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'CASTRO MANUEL ANTONIO (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'CANGALLO (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'DE LOS ITALIANOS AVDA. (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'DAVILA ADOLFO (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'RIVADAVIA COMODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1107',
//     city: 'RIBAS JOAQUIN ALFEREZ DE FRAGATA (ZONA PUERTO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1110',
//     city: 'SAENZ PEÑA LUIS PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1111',
//     city: 'AYACUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1112',
//     city: 'AYACUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1112',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1112',
//     city: 'FIGUEROA ALCORTA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1112',
//     city: 'POSADAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1113',
//     city: 'ORTIZ ROBERTO M. PRESIDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1113',
//     city: 'JUNIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1114',
//     city: 'URIBURU JOSE EVARISTO PRESIDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1115',
//     city: 'AZCUENAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1115',
//     city: 'BARRIENTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1116',
//     city: 'JUNCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1116',
//     city: 'RIOBAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1117',
//     city: 'LARREA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1117',
//     city: 'BERUTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1118',
//     city: 'PUEYRREDON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1119',
//     city: 'PUEYRREDON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1119',
//     city: 'GUIDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1120',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1121',
//     city: 'MANSILLA LUCIO NORBERTO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1121',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1122',
//     city: 'ALVEAR MARCELO T. DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1123',
//     city: 'SANTA FE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1124',
//     city: 'ARENALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1125',
//     city: 'JUNCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1125',
//     city: 'FRENCH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1125',
//     city: 'PEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1126',
//     city: 'PEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1126',
//     city: 'PACHECO DE MELO JOSE ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1127',
//     city: 'LAS HERAS GENERAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1128',
//     city: 'LOPEZ VICENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1128',
//     city: 'AZCUENAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1128',
//     city: 'CANTILO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1129',
//     city: 'ALVEAR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1129',
//     city: 'QUINTANA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1129',
//     city: 'SCHIAFFINO EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1130',
//     city: '15 DE NOVIEMBRE DE 1889'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1130',
//     city: 'RONDEAU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1130',
//     city: 'ECHAGUE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1133',
//     city: 'ENTRE RIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1134',
//     city: 'ENTRE RIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1134',
//     city: 'FILIBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1134',
//     city: 'MOMPOX'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1134',
//     city: 'ANTEQUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1134',
//     city: 'SOLIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1135',
//     city: 'SANTA TERESA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1135',
//     city: 'VIRREY CEVALLOS (VER CEVALLOS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1135',
//     city: 'SAENZ PEÑA LUIS PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1135',
//     city: 'CEVALLOS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1136',
//     city: 'SANTIAGO DEL ESTERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1136',
//     city: 'SAN JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1137',
//     city: 'SASTRE PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1137',
//     city: 'VIEYRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1137',
//     city: 'SALTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1137',
//     city: 'O\'BRIEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1137',
//     city: 'CIUDADELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1138',
//     city: 'LIMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1138',
//     city: 'IRIGOYEN BERNARDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1138',
//     city: 'GIORELLO PABLO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1139',
//     city: 'TACUARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1140',
//     city: 'PIEDRAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1140',
//     city: 'CHACABUCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1141',
//     city: 'BOLIVAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1141',
//     city: 'ITUZAINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1141',
//     city: 'PERU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1143',
//     city: 'USPALLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1143',
//     city: 'FINOCHIETTO ENRIQUE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1143',
//     city: 'DEFENSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1147',
//     city: 'SAN JUAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1148',
//     city: 'SAN JUAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1148',
//     city: 'COCHABAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1150',
//     city: 'COCHABAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1151',
//     city: 'CONSTITUCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1151',
//     city: 'PAVON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1152',
//     city: 'CASEROS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1153',
//     city: 'BALCARCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1153',
//     city: 'GARAY JUAN DE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1154',
//     city: 'HORNOS GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1154',
//     city: 'BRASIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'BLANES JUAN MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'BROWN ALTE. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'GALVEZ MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'PEREZ GALDOS BENITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'PILCOMAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: 'PI Y MARGALL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1155',
//     city: '20 DE SEPTIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'VICTORICA MIGUEL CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'ZONZA BRIANO PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'JUSTO AGUSTIN P. GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'GUSTAVINO ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'LIBERTI TOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'MENDOZA DON PEDRO DE AVDA. (VER DON PEDRO DE MENDOZA AVENIDA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'BRAUN MENENDEZ EDUARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'D\'ESPOSITO ARNALDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1156',
//     city: 'DON PEDRO DE MENDOZA AV.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1157',
//     city: 'CAFFARENA AGUSTIN R.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1157',
//     city: 'CABOTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1157',
//     city: 'ARZOBISPO ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1157',
//     city: 'GUALEGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1158',
//     city: 'NECOCHEA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1158',
//     city: 'BRIN MINISTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1159',
//     city: 'CAFFERATA FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1159',
//     city: 'BROWN ALTE. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1159',
//     city: 'AYOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1159',
//     city: 'RODRIGUEZ MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'PALOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'VILLAFAÑE WENCESLAO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'VALLE ARISTOBULO DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'ZOLEZZI ANTONIO L.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'DEL VALLE IBERLUCEA ENRIQUE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1160',
//     city: 'CAMINITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1161',
//     city: 'BRANDSEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1161',
//     city: 'VALLE ARISTOBULO DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1161',
//     city: 'PINZON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1162',
//     city: 'OLAVARRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1162',
//     city: 'PRACTICO POLIZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1162',
//     city: 'SUAREZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1162',
//     city: 'MOUSSY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1163',
//     city: 'MELO CARLOS F.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1163',
//     city: 'IRALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1163',
//     city: 'ALVAR NUÑEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1163',
//     city: 'PILCOMAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1164',
//     city: 'IRALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1164',
//     city: 'HERNANDARIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'HERNANDARIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'GUALEGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'GARCIA MARTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'LIBERTI TOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'ARZOBISPO ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'PI Y MARGALL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'VALLE ARISTOBULO DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1165',
//     city: 'VILLAFAÑE WENCESLAO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1166',
//     city: 'ROCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1166',
//     city: 'ARAOZ DE LA MADRID GREGORIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1166',
//     city: 'MAGALLANES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1166',
//     city: 'LAMADRID (VER ARAOZ DE LAMADRID GREGORIO GRAL.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1167',
//     city: 'GARIBALDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1167',
//     city: 'AUSTRALIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1167',
//     city: 'ALVARADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1167',
//     city: 'SALVADORES CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1167',
//     city: 'PADRE FEDERICO GROTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1168',
//     city: 'RIO CUARTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1168',
//     city: 'CALIFORNIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1168',
//     city: 'CARBONARI FRANCISCO COMANDANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1168',
//     city: 'CERRI DANIEL GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1169',
//     city: 'DON PEDRO DE MENDOZA AV.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1169',
//     city: 'MENDOZA DON PEDRO DE AVDA. (VER DON PEDRO DE MENDOZA AVENIDA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1169',
//     city: 'PARKER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1169',
//     city: 'VESPUCIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1170',
//     city: '24 DE NOVIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1170',
//     city: 'ANCHORENA TOMAS MANUEL DE DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1171',
//     city: 'AGUERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1171',
//     city: 'ESPARZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1171',
//     city: 'ZELAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1172',
//     city: 'GALLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1172',
//     city: 'GORRITI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1172',
//     city: 'CARCOVA DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1173',
//     city: 'LORIA (VER SANCHEZ DE LORIA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1173',
//     city: 'SANCHEZ DE BUSTAMANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1173',
//     city: 'SANCHEZ DE LORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1174',
//     city: 'VIRREY LINIERS (VER LINIERS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1174',
//     city: 'LINIERS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1174',
//     city: 'BILLINGHURST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1175',
//     city: 'BRAVO MARIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1175',
//     city: 'EL SALVADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1176',
//     city: 'BULNES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1176',
//     city: 'COSTA RICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1177',
//     city: 'DISCEPOLO ENRIQUE SANTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1177',
//     city: 'COLOMBRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1177',
//     city: 'INCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1177',
//     city: 'SALONICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1177',
//     city: 'SALGUERO JERONIMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1178',
//     city: 'MEDRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1178',
//     city: 'CASTRO BARROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1179',
//     city: 'MEDRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1180',
//     city: 'HONDURAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1180',
//     city: 'ACUÑA DE FIGUEROA FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1181',
//     city: 'BOCAYUVA QUINTINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1181',
//     city: 'GASCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1181',
//     city: 'SAN CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1182',
//     city: 'TREINTA Y TRES ORIENTALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1182',
//     city: 'RAWSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1182',
//     city: 'NUÑEZ ROBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1182',
//     city: 'PALESTINA                                                                       '
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1183',
//     city: 'MARMOL JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1183',
//     city: 'LIBRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1183',
//     city: 'BOGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1183',
//     city: 'PRINGLES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1183',
//     city: 'QUERANDIES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1184',
//     city: 'ROCAMORA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1184',
//     city: 'YATAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1184',
//     city: 'LA PLATA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1185',
//     city: 'LAMBARE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1185',
//     city: 'ESTADO DE ISRAEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1185',
//     city: 'PANAMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1186',
//     city: 'SAN LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1186',
//     city: 'CABRERA JOSE ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1187',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1187',
//     city: 'LAPRIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1188',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1189',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1190',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1191',
//     city: 'HUMAHUACA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1191',
//     city: 'GOMEZ VALENTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1192',
//     city: 'GUARDIA VIEJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1192',
//     city: 'HUMAHUACA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1193',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1194',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1195',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1196',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1197',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1197',
//     city: 'CARRIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1198',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1199',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1199',
//     city: 'POTOSI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1199',
//     city: 'KING'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1200',
//     city: 'DIAZ VELEZ AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1201',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1202',
//     city: 'LEZICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1202',
//     city: 'PELUFFO ANGEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1202',
//     city: 'YAPEYU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1203',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1204',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1205',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1206',
//     city: 'MAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1206',
//     city: 'DON BOSCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1206',
//     city: 'BOEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1207',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1207',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1208',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1208',
//     city: 'LUCERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1209',
//     city: 'MORENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1209',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1210',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1211',
//     city: 'VENEZUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1212',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1212',
//     city: 'QUITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1212',
//     city: 'MUÑIZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1213',
//     city: 'BOULOGNE SUR MER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1213',
//     city: 'CATAMARCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1213',
//     city: 'VIAMONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1214',
//     city: 'RIOJA (VER LA RIOJA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1214',
//     city: 'ECUADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1214',
//     city: 'DEAN FUNES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1214',
//     city: 'LA RIOJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1215',
//     city: 'JAURES JEAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1215',
//     city: 'GARDEL CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1215',
//     city: 'URQUIZA GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1216',
//     city: 'YAPEYU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1216',
//     city: 'BOCAYUVA QUINTINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1217',
//     city: 'CASTRO BARROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1217',
//     city: 'CASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1217',
//     city: 'PEREZ JOSE JULIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1218',
//     city: 'COLOMBRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1218',
//     city: 'BOEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1219',
//     city: 'MATHEU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1219',
//     city: 'PICHINCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1219',
//     city: 'PASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'ORURO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'VIRREY LINIERS (VER LINIERS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'SANCHEZ DE LORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'MAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'LORIA (VER SANCHEZ DE LORIA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1220',
//     city: 'LINIERS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1221',
//     city: 'LA RIOJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1221',
//     city: 'AGRELO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1221',
//     city: 'CHILE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1221',
//     city: 'URQUIZA GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1221',
//     city: 'RIOJA (VER LA RIOJA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1222',
//     city: 'SARANDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1222',
//     city: 'COMBATE DE LOS POZOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1222',
//     city: 'MEXICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1223',
//     city: 'MEXICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1223',
//     city: 'ALBERTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1224',
//     city: 'AGRELO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1224',
//     city: '24 DE NOVIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1225',
//     city: 'URIBURU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1225',
//     city: 'INDEPENDENCIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1226',
//     city: 'INDEPENDENCIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1227',
//     city: 'ESTADOS UNIDOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1227',
//     city: 'CHILE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1227',
//     city: 'RINCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1228',
//     city: 'TOTORAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1228',
//     city: 'AMBATO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1228',
//     city: 'ESTADOS UNIDOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1229',
//     city: 'HUMBERTO I"'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1229',
//     city: 'JUJUY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1229',
//     city: 'SAAVEDRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1230',
//     city: 'CALVO CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1231',
//     city: 'CATAMARCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1231',
//     city: 'DEAN FUNES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1231',
//     city: 'HUMBERTO I"'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1231',
//     city: 'SAN IGNACIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1232',
//     city: 'SAN JUAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1233',
//     city: 'SAN JUAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1233',
//     city: 'BIDEGAIN PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1234',
//     city: 'MUÑIZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1234',
//     city: 'MORSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1234',
//     city: 'SPEGAZZINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1235',
//     city: 'LA PLATA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1235',
//     city: 'BIDEGAIN PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1236',
//     city: 'DEVOTO FORTUNATO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1236',
//     city: 'MARMOL JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1236',
//     city: 'TREINTA Y TRES ORIENTALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1237',
//     city: 'PEREYRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1237',
//     city: 'CASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1237',
//     city: 'CASTRO BARROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1238',
//     city: 'COLOMBRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1238',
//     city: 'LAS CASAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1238',
//     city: 'JANTIN JUAN BAUTISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1239',
//     city: 'BOEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'ALZAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'AVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'GALLEGOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'MAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'METAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1240',
//     city: 'VENIALVO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1241',
//     city: 'VIRREY LINIERS (VER LINIERS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1241',
//     city: 'SANCHEZ DE LORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1241',
//     city: 'LINIERS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1241',
//     city: 'LORIA (VER SANCHEZ DE LORIA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1241',
//     city: 'CABOT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1242',
//     city: 'APULE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1242',
//     city: 'CASACUBERTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1242',
//     city: 'DANEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1242',
//     city: '24 DE NOVIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1242',
//     city: 'PRUDAN MANUEL SILVESTRE TTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1243',
//     city: 'ORURO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1243',
//     city: 'URQUIZA GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1243',
//     city: 'COTAGAITA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1243',
//     city: 'BARCALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1243',
//     city: 'GARRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1244',
//     city: 'LA RIOJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1244',
//     city: 'DEAN FUNES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1244',
//     city: 'RIOJA (VER LA RIOJA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1245',
//     city: 'RONDEAU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1245',
//     city: 'COMBATE DE LOS POZOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1246',
//     city: 'CATAMARCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1246',
//     city: 'LUCA ESTEBAN DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1247',
//     city: 'JUJUY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1247',
//     city: 'ALBERTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1247',
//     city: 'SAAVEDRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1248',
//     city: 'PAVON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1249',
//     city: 'PICHINCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1249',
//     city: 'MATHEU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1250',
//     city: 'LA PLATA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1251',
//     city: 'PASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1251',
//     city: 'RINCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1251',
//     city: 'SARANDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1252',
//     city: 'COCHABAMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1253',
//     city: 'TARIJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1253',
//     city: 'PAVON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1254',
//     city: 'CONSTITUCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1255',
//     city: 'MARMOL JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1255',
//     city: 'MUÑIZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1255',
//     city: 'GIBSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1256',
//     city: 'GARAY JUAN DE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1257',
//     city: 'ANGACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1257',
//     city: 'BOCAYUVA QUINTINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1257',
//     city: 'TREINTA Y TRES ORIENTALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1258',
//     city: 'INCLAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1259',
//     city: 'CHICLANA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1259',
//     city: 'SALCEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1259',
//     city: 'CAPITAL FEDERAL                                                                 '
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1260',
//     city: 'CHICLANA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1260',
//     city: 'BRASIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1261',
//     city: 'BATHURST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1261',
//     city: 'ECHAGUE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1261',
//     city: 'ESQUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1261',
//     city: '15 DE NOVIEMBRE DE 1889'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1262',
//     city: 'RONDEAU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1262',
//     city: 'TIMBUES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1262',
//     city: 'CHICLANA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1263',
//     city: 'CASEROS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1264',
//     city: 'CASEROS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1265',
//     city: 'GUALEGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1265',
//     city: 'LIBERTI TOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1265',
//     city: 'REGIMIENTO DE PATRICIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1265',
//     city: 'PI Y MARGALL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1265',
//     city: 'PATRICIOS (VER REGIMIENTO DE PATRICIOS)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1266',
//     city: 'PATRICIOS (VER REGIMIENTO DE PATRICIOS)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1266',
//     city: 'REGIMIENTO DE PATRICIOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'RUY DIAZ DE GUZMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'OLAVARRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'LAMADRID (VER ARAOZ DE LAMADRID GREGORIO GRAL.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'JOVELLANOS MELCHOR GASPAR DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'ARAOZ DE LA MADRID GREGORIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1267',
//     city: 'AZARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'ARZOBISPO ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'JOVELLANOS MELCHOR GASPAR DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'ISABEL LA CATOLICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'GARCIA MARTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'SAMPERIO MANUEL J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1268',
//     city: 'USPALLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1269',
//     city: 'ISABEL LA CATOLICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1269',
//     city: 'JOVELLANOS MELCHOR GASPAR DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1269',
//     city: 'AZARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1270',
//     city: 'MONTES DE OCA MANUEL A. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1271',
//     city: 'MONTES DE OCA MANUEL A. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1271',
//     city: 'ISABEL LA CATOLICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1271',
//     city: 'VILLARINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1272',
//     city: 'ITUZAINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1272',
//     city: 'HORNOS GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1272',
//     city: 'FINOCHIETTO ENRIQUE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1273',
//     city: 'HERRERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1273',
//     city: 'VILLARINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1273',
//     city: 'SANTO DOMINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1273',
//     city: 'SAN RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'SALMUN FEIJOO JOSE AARON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'RICO CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'ICALMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'GUANAHANI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'LANIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'ARCAMENDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1274',
//     city: 'COPAHUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'BARRACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'LAVADERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'JORGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'FINOCHIETTO ENRIQUE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'OLMOS AMBROSIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'PARACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1275',
//     city: 'VIEYTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1276',
//     city: 'VILLARINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1276',
//     city: 'SAN ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1276',
//     city: 'SANTA MAGDALENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1276',
//     city: 'GONCALVES DIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1276',
//     city: 'DARQUIER JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'ALGARROBO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'SANTA MAGDALENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'SANTA MARIA DEL BUEN AIRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'SAN RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'PINEDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1277',
//     city: 'SALOM'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1278',
//     city: 'RIO LIMAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1278',
//     city: 'RENACIMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1278',
//     city: 'SANTA ELENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'SPIKA ENRIQUE GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'ROCHDALE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'PERDRIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'OWEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'ARAOZ DE LA MADRID GREGORIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'AZCUENAGA DOMINGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'CRUZ DEL SUD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'LAMADRID (VER ARAOZ DE LAMADRID GREGORIO GRAL.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'LUZURIAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'MANDISOVI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1279',
//     city: 'MEANA BENITO CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1280',
//     city: 'LUZURIAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1280',
//     city: 'CIUDAD DE SABADELL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1280',
//     city: 'ANCHORIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1280',
//     city: 'PERDRIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1280',
//     city: 'TOLL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1281',
//     city: 'VELEZ SARSFIELD AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1281',
//     city: 'ONCATIVO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1281',
//     city: 'OLAVARRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1281',
//     city: 'CORTEJARENA JOSE A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1281',
//     city: 'MIRAVE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'GOMEZ JUAN CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'FINOCHIETTO ENRIQUE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'BAIGORRI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'PATAGONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'VELEZ SARSFIELD AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'USPALLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1282',
//     city: 'SANTA CRUZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1283',
//     city: 'SANLUCAR DE BARRAMEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1283',
//     city: 'ALCORTA AMANCIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1283',
//     city: 'LOS PATOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'LOS PATOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'LAFAYETTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'MIRAVE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'MONASTERIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'MUTUALISMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'GARCIA MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'COOPERACION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'CHUTRO PEDRO PROFESOR DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1284',
//     city: 'SUAREZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1285',
//     city: 'VELEZ SARSFIELD AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1285',
//     city: 'ZEPITA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'ORMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'CHUBUT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'ASCASUBI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'BARILOCHE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'BLANDENGUES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'LAFAYETTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1286',
//     city: 'MAGALDI AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1287',
//     city: 'BRANDSEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1287',
//     city: 'PINZON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'OLAVARRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'ROCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'SUAREZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'ARAOZ DE LA MADRID GREGORIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'MAGALLANES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'LAMADRID (VER ARAOZ DE LAMADRID GREGORIO GRAL.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1288',
//     city: 'JENNER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1289',
//     city: 'CALIFORNIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'CONI EMILIO R. DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'CAYASTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'DAMIANOVICH ELEODORO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'ARATA PEDRO N.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'ALVARADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'MADERA JUAN DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'MORRIS WILLIAMS C.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'SUD AMERICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'SAN ANTONIO DE ARECO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'SAN FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'UNAMUNO MIGUEL DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'SALMUN FEIJOO JOSE AARON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1290',
//     city: 'PONCE ANIBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1291',
//     city: 'IRIARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1291',
//     city: 'CERRI DANIEL GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1292',
//     city: 'RIO CUARTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1292',
//     city: 'SANTO DOMINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1293',
//     city: 'SANTO DOMINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1293',
//     city: 'CRUZ OSVALDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1293',
//     city: 'ALGARROBO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1293',
//     city: 'MELGAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1294',
//     city: 'MENDOZA DON PEDRO DE AVDA. (VER DON PEDRO DE MENDOZA AVENIDA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1294',
//     city: 'LUJAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1294',
//     city: 'CRUZ OSVALDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1294',
//     city: 'DON PEDRO DE MENDOZA AV.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1295',
//     city: 'AROLAS EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1295',
//     city: 'HERRERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1295',
//     city: 'VALLE ARISTOBULO DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1295',
//     city: 'VILLAFAÑE WENCESLAO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1296',
//     city: 'SALVADORES CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1296',
//     city: 'AUSTRALIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1296',
//     city: 'ALVARADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1300',
//     city: 'DE LAS CATALINAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1301',
//     city: 'PELLEGRINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1302',
//     city: 'PARANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1303',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1304',
//     city: 'IRIGOYEN BERNARDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1305',
//     city: 'PASEO COLON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1306',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1307',
//     city: 'AZOPARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1308',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1309',
//     city: 'CERRITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1310',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1311',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1312',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1313',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1314',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1315',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1316',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1317',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1318',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1319',
//     city: 'DE MAYO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1320',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1321',
//     city: 'CHACABUCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1322',
//     city: 'ROCA JULIO A. PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1323',
//     city: 'PASEO COLON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1324',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1325',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1326',
//     city: 'BALCARCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1327',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1328',
//     city: 'AZOPARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1329',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1330',
//     city: 'PASEO COLON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1331',
//     city: 'PELLEGRINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1332',
//     city: '9 DE JULIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1333',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1334',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1335',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1336',
//     city: 'CERRITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1337',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1338',
//     city: 'PELLEGRINI CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1339',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1340',
//     city: 'MAIPU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1341',
//     city: 'TUCUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1342',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1343',
//     city: 'ESMERALDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1344',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1345',
//     city: 'DEFENSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1346',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1347',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1348',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1349',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1350',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1351',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1352',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1353',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1354',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1355',
//     city: 'SUIPACHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1356',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1357',
//     city: 'MITRE BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1358',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1359',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1360',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1361',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1362',
//     city: 'DE MAYO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1363',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1364',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1365',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1366',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1367',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1368',
//     city: 'SUIPACHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1369',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1370',
//     city: 'ESMERALDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1371',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1372',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1373',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1374',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1375',
//     city: 'FLORIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1376',
//     city: 'MAIPU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1377',
//     city: 'YRIGOYEN HIPOLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1378',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1379',
//     city: 'IRIGOYEN BERNARDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1380',
//     city: 'DE MAYO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1381',
//     city: 'BELGRANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1382',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1383',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1384',
//     city: 'ALSINA ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1385',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1386',
//     city: 'SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1387',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1388',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1389',
//     city: 'RECONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1390',
//     city: 'LAVALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1391',
//     city: 'TALCAHUANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1392',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1393',
//     city: 'SAENZ PEÑA ROQUE AVDA. PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1394',
//     city: 'PERON JUAN DOMINGO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1395',
//     city: 'ALVEAR MARCELO T. DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1396',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1397',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1398',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1399',
//     city: 'PASEO COLON AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PATRICIAS ARGENTINAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PARRAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PALMA RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'OLAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'OROÑO NICASIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ORTEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'OTAMENDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'OSAKA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PAYSANDU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PLANES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ROENTGEN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ROJAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'RAMOS MEJIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'RIO DE JANEIRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PUEYRREDON HONORIO DR. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PUJOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'PORTUGAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'VALLESE FELIPE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'YERBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'VILA NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'VIDELA CASTILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'VINTTER LORENZO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'VIRASORO VALENTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'SAN SEBASTIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ZORRILLA DE SAN MARTIN JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'CENTENARIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'COLPAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'CAMPICHUELO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'CANALEJAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'DEMARIA ISIDORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'DIAZ VELEZ AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'CURIE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'CUCHA CUCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'AMBERES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'AMBROSETTI JUAN B.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'AMPERE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ACEVEDO EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ACOYTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'AVELLANEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ARENGREEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ARAOZ ALFARO GREGORIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ARANGUREN JUAN FELIPE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'AÑASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BERNAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BALCARCE FLORENCIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BALDRICH JUAN AMADEO DE CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BACACAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BEADE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BIEDMA JOSE JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BOGOTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BURMEISTER GERMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'BRUNO GIORDANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'LILLO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'LOBOS ELEODORO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'MACIEL FRANCISCO ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'MACHADO ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'LOS ALPES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'LORA FELIX'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'LAHITTE CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'MENDEZ DE ANDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'NUMANCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'NEUQUEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'HIDALGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'HUEMUL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'FLORES VENANCIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'FINLAY CARLOS J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'FRAGATA PTE. SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'FRANKLIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'GAONA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'GALLARDO ANGEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'GAINZA MARTIN DE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ESNAOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ESCRIBANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'ESTIVAO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1405',
//     city: 'EPUYEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'EL ZONDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ESPEJO GERONIMO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ESPARTACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FARADAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FERNANDEZ MORENO BALDOMERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FERRARI ANTONINO M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FABRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FALCON RAMON L. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FRAY LUIS BELTRAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GARZON EUGENIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GAVILAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FRANKLIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FRAY CAYETANO RODRIGUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FRAGATA PTE. SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'FLORES VENANCIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'HUALFIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'HORTIGUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ITALIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'JUNTA (VER PRIMERA JUNTA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GODOY RUPERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GONZALEZ ROQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GOYENA PEDRO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'GRANADEROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'HELGUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'NEUQUEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'NEPPER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'NAON JUAN JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'NAVARRO VIOLA MIGUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'NAZCA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MORON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MORENO PERITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MORELOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MENDEZ DE ANDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MEMBRILLAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MIRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MIRAFLORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MALVINAS ARGENTINAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MANCO CAPAC'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MARTI JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MARCOARTU PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MARTINEZ VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'MARTINEZ PLACIDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LANUS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LAMAS ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LAFERRERE GREGORIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LAFUENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LA GALERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LAUTARO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'LA PORTEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BUFANO ALFREDO R.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BUSTILLO JOSE MARIA GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CABALLITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CALCENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BOLIVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BOGOTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BIEDMA JOSE JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BILBAO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BOYACA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BONIFACIO JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BONORINO ESTEBAN CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BACACAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BALBASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'BIALET MASSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ANDRADE OLEGARIO V.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ARANGUREN JUAN FELIPE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ARGERICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'AVELLANEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ASIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ASAMBLEA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ARTIGAS JOSE GERVASIO DE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ARROTEA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'AROMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ACHAVAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ALBERDI JUAN BAUTISTA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ALVAREZ CRISOSTOMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ALVAREZ DONATO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CUENCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CULPINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CURAPALIGUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CRANWELL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CRESPO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DAVILA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CHIRIMAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DIAZ AVELINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DON SEGUNDO SOMBRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DIRECTORIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'EGUIA MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ECHEANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DELLEPIANE LUIS J. TTE. GENERAL (AUT. EZEIZA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'DEL TRABAJO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CANALEJAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CARABOBO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CARACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CAMBIESES EUSTAQUIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CAMPANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CAMACUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CASTAÑARES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CARRIEGO EVARISTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CASTRO JUAN DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CASTILLO JUAN DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CASTAÑON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CONDARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'COBO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'CIPOLLETTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ZUVIRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SAN PEDRITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SARAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SANTANDER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SEGUI F. J. ALMIRANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TANDIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TERRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TERRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TERRY JOSE A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'THORNE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TIMBO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TORRES Y TENORIO CAMILO PTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'TRELLES MANUEL RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SOMELLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'YERBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ZAÑARTU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ZAPALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ZELARRAYAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VALLESE FELIPE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VALLE PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VARELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VELAZQUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'UCACHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'VALENCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PRIMERA JUNTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PUMACAHUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'QUIRNO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RICCIO GUSTAVO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RAMON Y CAJAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RENAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'REMEDIOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RECUERO CASIMIRO TTE. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RODRIGUEZ ALONSO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RODRIGUEZ IGNACIO FERMIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ROBERTSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ROBLA JUAN FRANCISCO DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'RIVERA INDARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SALALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'SALVIGNY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PORTELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PILLADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PERRAULT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PESCADORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PAYSANDU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PEDERNERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PERGAMINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'ORTIZ CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'OROÑO NICASIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'OCEANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406',
//     city: 'PAEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1406      ',
//     city: 'AV EVA PERON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PAEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PADRE MONTES CARBALLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PALLIERE JUAN LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PARTICULAR PJE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'OLMOS JUAN FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'OLIVERA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'OLIVIERI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PEÑA DAVID DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PAZ Y FIGUEROA MARIA ANTONIA DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PAZ MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PEHUAJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PAYRO ROBERTO J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PINELO LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PORTILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PODESTA PABLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SANABRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RUBENS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RODO JOSE ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ROFFO ELENA LARROQUE DE (VER LARROQUE DE ROFFO ELENA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'REMEDIOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RECUERDOS DE PROVINCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RECUERO CASIMIRO TTE. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RANQUELES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RENQUE CURA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RIO GRANDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'RAFAELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PUCH MANUEL GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PUEYRREDON PRILIDIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'PRIMERA JUNTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'URUNDAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'UNQUERA BALTASAR DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TUPAC AMARU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TRIESTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VELAZQUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VALLE MARIA REMEDIOS DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VALLESE FELIPE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VEDIA ENRIQUE DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ZELADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ZARATE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'YERBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'WHITE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VUCETICH JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'WAGNER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VIRGILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VINCHINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VIRREY MELO (VER MELO VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VILARDEBO TEODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'VIGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SOMELLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SHANGAI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TACUARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TREJO NEMESIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TRES ARROYOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TOAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TOKIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TOLEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TAPALQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'TANDIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SEGUROLA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SANTANDER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SANTIAGO DE COMPOSTELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SARACHAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SAN NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SAN PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SAN BLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'SAN JUAN BAUTISTA DE LA SALLE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ZUVIRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ZINNY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CERVANTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'COMPOSTELA SANTIAGO DE (VER SANTIAGO DE COMPOSTELA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CONCORDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'COLLIVADINO PIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CORRO CANONIGO MIGUEL CALIXTO DEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CORREA GUILLERMO DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CASTELAR EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CASTRO EMILIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CASTRO ROSALIA DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CARRASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CARRERAS SANTIAGO DE LAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CASTAÑARES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CARDOSO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CARRANZA CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CAMARONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CALINGASTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CAMOATI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CAMBIESES EUSTAQUIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CARAPACHAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CANALEJAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CANDELARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DEL TRABAJO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DELLEPIANE LUIS J. TTE. GENERAL (AUT. EZEIZA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DERQUI AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DELAMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ECHEANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL ARAUCANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DUMAS ALEJANDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DOLORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DONIZETTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DON CRISTOBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DIAZ CESAR GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DIRECTORIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CHIVILCOY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CHILECITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CHECOSLOVAQUIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CHASCOMUS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DAGUERRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'D\'AMICIS EDMUNDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DANTAS JULIO S.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'DANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CORTINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CUNNINGHAME GRAHAM ROBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALVAREZ DE ACEVEDO TOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALVAREZ JONTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALVAREZ CRISOSTOMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'AMEGHINO FLORENTINO DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALVEAR EMILIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALLENDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALBARRACIN DE SARMIENTO PAULA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALBERDI JUAN BAUTISTA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALBANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ALCARAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ACOSTA MARIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ASTURIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ATAHUALPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'AVELLANEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'AZUL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BACACAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ARANGUREN JUAN FELIPE DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ANDALUCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BEYROUTH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BERMUDEZ ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BERNALDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BERNARDI CONSCRIPTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BERMUDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BELAUSTEGUI LUIS DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BELEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BARADERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BACLE CESAR H.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BAHIA BLANCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BALBASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BOLONIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BONIFACIO JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BRAGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BILBAO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BOGOTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BOERI JUAN A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BOLAÑOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CALAZA JOSE MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CALDERON DE LA BARCA PEDRO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CAGLIARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CAJARAVILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'CACHEUTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BYRON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BROWN FRANK'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'BRUIX AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA PINTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LARRAÑAGA DAMASO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LARROQUE DE ROFFO ELENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAUSANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAS ACACIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA SANTA MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA SELVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAFERRERE GREGORIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA FACULTAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LACARRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA CORDILLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAMARCA EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LA NIÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAGUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LAGRANGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LLAVALLOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MAGARIÑOS CERVANTES ALEJANDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LOBOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LOBERIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LOPE DE VEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LEOPARDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'LEVALLE NICOLAS TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MATACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MEDINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MAR DEL PLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MANZONI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MARTINEZ CASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MILTON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MIRANDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MIRAMAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MELO VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MENENDEZ Y PELAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MERCEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MOREL CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MORENO PERITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MORON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MORETO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MOCTEZUMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MOLIERE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MURATURE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'MOZART'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ÑANDUTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HAITI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GUALEGUAYCHU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GOYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GONZALEZ ELPIDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GONZALEZ JOAQUIN V.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GOMEZ DE FONSECA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'JUNTA (VER PRIMERA JUNTA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'KORN ALEJANDRO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'JUSTO JUAN B. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'JUAREZ BENITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'IRIGOYEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'JACARANDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HOMERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HINOJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HUBAC'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HUGO VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'HUNGRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'FLORES VENANCIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GARZON EUGENIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GAONA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GARCIA JUAN AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GAITAN LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GALENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'GALICIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'FALCON RAMON L. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EUCLIDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'FERNANDEZ MORENO BALDOMERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'FECUNDIDAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'FERNANDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ESPINILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ENSENADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL SAUCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL SERENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL TALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ESCALADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'ESCALADA DE SAN MARTIN REMEDIOS DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL CERRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL CRIOLLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL FUERTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1407',
//     city: 'EL PROFETA DE LA PAMPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL RANCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL NENE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL HORNERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL MIRASOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL CHACHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL CHASQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL CONDOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL CARDENAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL CARPINTERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ERCILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL RASTREADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL RECADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ENCINA CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL ZORZAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'EL TREBOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ESTERO BELLACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ESTEVES SAGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ESQUINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ESPRONCEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FALCON RAMON L. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FACUNDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FADER FERNANDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GALLARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GAMBOA MARCELO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GARCIA JUAN AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GARCIA DE COSSIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FERROCARRIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FRAGUEIRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'FONROUGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'HUMAITA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'IBARROLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'IÑIGO CARRERA SEGUNDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'HUGO VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'JACQUES AMADEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'IRIGOYEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'JUSTO JUAN B. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GIBRALTAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GORDILLO JOSE OLEGARIO CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GONZALEZ CHAVES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GONZALEZ ELPIDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GORDILLO TIMOTEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GRANADA NICOLAS CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GROUSSAC PAUL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GUAMINI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GUARDIA NACIONAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GUEMES TORINO JORGE CADETE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GUIPUZCOA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'GUTIERREZ EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'NOGOYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MURGUIONDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'NAZARRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MOLIERE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MOLINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MORENO PERITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MORENO ENRIQUE B.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MONTIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MELINCUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MIRALLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MIRANDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MARTINEZ DE HOZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MBURUCUYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MARTIN FIERRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MARTINEZ JUAN ESTEBAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LEGUIZAMON MARTINIANO (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LEGUIZAMON ONESIMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LEONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LEGUIZAMON MARTINIANO (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LISBOA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LISTA RAMON CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MAGARIÑOS CERVANTES ALEJANDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MADRID'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'MADERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LOZANO PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LOS RECUERDOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LUCHTER (SUR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LAGOS GARCIA LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA MADRESELVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA HUELLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA HUERTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA CONQUISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA DILIGENCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LA CAUTIVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LAS BASES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LASCANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LAS TUNAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LARRAZABAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'LARGUIA CARLOS CADETE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BRUSELAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BUERAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CAAGUAZU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BYNNON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CAFAYATE (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CAFAYATE (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CALDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BRAILE LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BOSCH VENTURA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BOQUERON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BAIGORRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BACACAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BAHIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BALTORE JOSE R.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BAUZA FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BASUALDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BARRAGAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BEDOYA ELIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'BERMEJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ANDORRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ARAUJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ARCE MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'AYUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ATENZO LEOPOLDO MECANICO MILITAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ARREGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ACASSUSO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'AGUARIBAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ALCARAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ALPATACAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ALICANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ALBARIÑO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'AMALIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ANDALGALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ALVAREZ JONTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CURUZU CUATIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CUZCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CUNEO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CORTINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CORVALAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'COSQUIN (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'COSQUIN (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'DA VINCI LEONARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'DE LA ECONOMIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CHAVEZ JORGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'DUPUY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ECHENAGUCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CANGAYE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CAÑADA DE GOMEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CARANDAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CARBALLIDO JOSE E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CAMARONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CARHUE (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CARHUE (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'CASTRO EMILIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'COCHICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SAN BLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SANTO TOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SANTIAGO DE CHILE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SANTI MIGUEL SOLDADO ARCHIVISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SASTRE MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TONELERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TORRE LISANDRO DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TINOGASTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TRENQUE LAUQUEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TAFI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SUAREZ JOSE LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SILVA CAYETANO A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SIMBRON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VIENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VIDAL EMERIC E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VIEDMA FRANCISCO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VIRGILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'YERBAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VARELA JOSE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TUYU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'TUYUTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'URDANETA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'URIEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VALENCIA TOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PRELADO DON BUENAVENTURA RISSO PATRON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'RESERVISTAS ARGENTINOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ROFFO ANGEL H. DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ROMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'RUIZ DE LOS LLANOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ROSALES CLAUDIO CAPITAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SAENZ VALIENTE ANSELMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'SALADILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PORCEL DE PERALTA MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'POLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'POLONIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PIERES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PILAR (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PILAR (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PAULA Y RODRIGUEZ ALVES JOSE DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PERIBEBUY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'OLIDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'OPORTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ORIGONE MANUEL FELIX TTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'ORTIZ FRANCISCO J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'OSTENDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PARTICULAR PJE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PARIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PATRON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'PALMAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1408',
//     city: 'VILLA LURO                                                                      '
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'PADILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'PARRAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ORO (VER FRAY JUSTO SANTA MARIA DE ORO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'OLAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'RUSSEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'RAMIREZ DE VELASCO JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'RAVIGNANI EMILIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'PUEYRREDON HONORIO DR. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'URIARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VEGA NICETO CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VELASCO JUAN RAMIREZ DE (VER RAMIREZ DE VELAZCO JUAN)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VIALE LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VOLTAIRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'WARNES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VIRASORO VALENTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'VILLARROEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'SORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'SUSINI ANTONIO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'TRES ARROYOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'THAMES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'SERRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'SCALABRINI ORTIZ RAUL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'SANTA ROSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CONVENCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CASTILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CARRANZA ANGEL JUSTINIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CAMARGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CAMPICHUELO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CAÑUELAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CANARD BENJAMIN DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'DRAGO LUIS MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'DORREGO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'DEL PARQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'DARWIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'COSTA RICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ALVAREZ JULIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'AGUIRRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ACEVEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ACOYTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ATACALCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'AREVALO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ARGAÑARAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ARMENIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ARAOZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ANTEZANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'BELAUSTEGUI LUIS DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'BATALLA DEL PARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'BONPLAND'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'BRAVARD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CABRER CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'CABRERA JOSE ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'LOYOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'LAVALLEJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'LERMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MARTINEZ ROSAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MASSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MALABIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MURCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MURILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'MUÑECAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'NICARAGUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GURRUCHAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GORRITI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GODOY CRUZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'JUSTO JUAN B. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'JUFRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'HUAURA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'HIDALGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'HONDURAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'HUMBOLDT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'FRAY JUSTO SANTAMARIA DE ORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'FIGUEROA APOLINARIO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'FITZ ROY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GASCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GANDHI MAHATMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'GALICIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'FRIAS EUSTOQUIO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'FERRARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'EL SALVADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1414',
//     city: 'ESCALADA DE SAN MARTIN REMEDIOS DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ESCALADA DE SAN MARTIN REMEDIOS DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL TROVADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL DELTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL DOMADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL METODO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL LITORAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL ÑANDU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL PEREGRINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'FERNANDEZ ESPIRO DIEGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GALICIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GARCIA CEFERINO AGENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GAONA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GARCIA JUAN AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'FIGUEROA APOLINARIO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'FRAGATA PTE. SARMIENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'INGENIEROS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'JUAN JACOBO (VER ROUSSEAU)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'JUSTO JUAN B. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GAVILAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GAZETA DE BUENOS AIRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GRANADA NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GRANVILLE GUILLERMO ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GONZALEZ ELPIDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'GUIDO SPANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'HELGUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'NIZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'NAZCA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MORELOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MEDANOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MATURIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MILAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MIGUEL ANGEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LEON BERNARDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LINNEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LOS ANDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LOS PIRINEOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'MAGARIÑOS CERVANTES ALEJANDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LASCANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LAS PROVINCIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LA CALANDRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LA COMUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LA ESPIGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LA FRONDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LAPACHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LA MAREA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'LAMAS ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CALFUCURA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BUFANO ALFREDO R.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BOYACA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BOLIVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BATALLA DEL PARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BELAUSTEGUI LUIS DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BELLA VISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'BIARRITZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ANTEZANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'AÑASCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ARIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ARGERICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ARREGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ARTIGAS JOSE GERVASIO DE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ACHUPALLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ALMAGRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ALVAREZ DONATO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ALVAREZ JONTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CRAINQUEVILLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CUENCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CUCHA CUCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CURATELLA MANES PABLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'DANTAS JULIO S.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'DEDICO DOMINGO AGENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CHIMBORAZO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: '12 DE OCTUBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'DINAMARCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'DICKMAN ADOLFO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'DIAZ CESAR GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'EL ALFABETO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CARACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CAMPANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CAMARONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CARRANZA ADOLFO P.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CASAFOUST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CONDARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'CISNEROS VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SEGUI F. J. ALMIRANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SAN BLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SANCHEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SAN GINES MANUEL DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SAN MARTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'TERRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'TERRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'TRES ARROYOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'TRELLES MANUEL RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SUIZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'SUNCHALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'VIRREY CISNEROS (VER CISNEROS VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'VILLAFAÑE BENJAMIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'WARNES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'VIALE LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'TRES LOMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'PUJOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'PUNTA ARENAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ROUSSEAU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'ROJAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'RODRIGUEZ MANUEL A. GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'OROÑO NICASIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'PERNAMBUCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1416',
//     city: 'PAYSANDU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'PEIPING'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'PAZ MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'PERNAMBUCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'PASO DE LOS LIBRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'PADRE FAHY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ROHDE CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ROJAS DIEGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RIVAROLA PANTALEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RIVAS GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RUMANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RUSIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SANABRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'QUEVEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'POSADAS ALEJANDRO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RAMIREZ EUGENIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RESURRECCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'RIO COLORADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'UKRANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VALDIVIA PEDRO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'UZAL FRANCISCO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VERDI JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VENECIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VARELA JOSE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VEDIA ENRIQUE DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'WILDE EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ZALDIVAR PEDRO F.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ZAMUDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'YUGOSLAVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VILLA JUNCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'VILARDEBO TEODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SOLORZANO PEREIRA JUAN DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SIMBRON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SIERRA GRANDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SOLA MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'TOBAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'TINOGASTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'TERRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'TERRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SAN MARTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SAN MARTIN AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SAN NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SEGUROLA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SASTRE MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'SANTO TOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ZURICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CITTADINI BASILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CERVANTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CEPEDA Y AHUMADA RODRIGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'COGHLAN JUAN M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'COLIQUEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'COLUMBIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CONDARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CONCORDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CARRANZA ADOLFO P.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CAMPANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CARACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CANADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'DIAMANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'DE MATURANA JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'DESEADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'DESAGUADERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CHIRIGUANOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CHIVILCOY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CHORROARIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CHUMBICHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CHAGAS CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CUERVO RUFINO JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CUENCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'COUTO MIGUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'AMSTERDAM'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ALLENDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ALMEIRA HILARIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ARTIGAS JOSE GERVASIO DE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ARREGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ARGERICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BERMUDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BELFAST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BELGICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BATEMAN J. F.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BAIGORRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BAHIA BLANCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BOLIVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BOSTON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BOMBAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'BUFANO ALFREDO R.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'CALDERON DE LA BARCA PEDRO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LAMARCA EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LASCANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LAS COLONIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LAURELES ARGENTINOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LAPLACE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MAGDALENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LYNCH ARRIBALZAGA FELIX'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LLAVALLOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LOPEZ VICENTE FIDEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LOS TERRITORIOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LOZANO PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LISTA RAMON CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LOMAS DE ZAMORA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LOPE DE VEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'LEIPZIG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MERCEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MELINCUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MATURANA JOSE DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MARTIN PESCADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MARTINEZ MATEO J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MONACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MOHR ALEJANDRO F.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'MONNER SANS RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NEVADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NOGOYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NORUEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NAZARRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NAZCA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NACIONES UNIDAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NAMUNCURA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'HELGUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'HAWAI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GUTIERREZ RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GUALEGUAYCHU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GONZALEZ CATAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GONZALEZ AGUSTIN INGENIERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GONZALEZ JOAQUIN V.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'GENOVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'JUAREZ BENITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'JACHAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'INGLATERRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'INDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'FONTANA LUIS JORGE CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'EZEIZA GABINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'EL QUIJOTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'EL PAMPERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'EL MISIONERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'EMPEDRADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1417',
//     city: 'NAZARE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ESCOBAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'EPECUEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'EL GAUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'EL FERROVIARIO PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'EL FOGON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'EZEIZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ESTRELLA FEDERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'FAGNANO JOSE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'FERNANDEZ DE ENCISO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'FAMAILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ESPRONCEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'FRANCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'IBARROLA RODRIGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'HIDALGO BARTOLOME'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'HUGO VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'JUAREZ BENITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GAVILAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GONZALEZ JOAQUIN V.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GRIVEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GUALEGUAYCHU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GUTIERREZ RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'GUTENBERG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'HABANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'HALL BASILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'HELGUERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'NAZCA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'NAVARRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'NUEVA YORK'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'OBISPO SAN ALBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MOLIERE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MOLINA ARROTEA CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MORAN PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MOSCONI GENERAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MERCEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'MISTRAL GABRIELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LOPE DE VEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LOPEZ CARLOS ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LOPEZ JUAN PABLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LOPEZ MERINO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LINCOLN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LLAVALLOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LARSEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LASTRA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LAVAISSE BENJAMIN J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LAMARCA EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LAFOND GABRIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LADINES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'LA BLANQUEADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CALDERON DE LA BARCA PEDRO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BULGARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CABEZON JOSE LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BOLIVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BAHIA BLANCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BACON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BARAGAÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BAZURCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BAUZA FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BEIRO FRANCISCO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'BERMUDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ARGERICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ASUNCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ARTIGAS JOSE GERVASIO DE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALEMANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALBARELLOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALLENDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALVAREZ PRADO MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALVAREZ AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ALTA GRACIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CRUZ DEL EJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CORTINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CUENCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CUBAS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CURUPAYTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CHIVILCOY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'DESAGUADERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ECHEVARRIA VICENTE ANASTASIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'DUARTE JUAN PABLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CANTILO JOSE LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CARACAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CAMPANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CARRIL SALVADOR MARIA DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CASTELLANOS JOAQUIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CONCORDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'COLIGUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'COCHRANE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CERVANTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'CONDARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SANTOS VEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SEGUROLA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SAN NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SAN MARTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'TERRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SOLANO LOPEZ FRANCISCO MARISCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'VIRGILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ZAMUDIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ZEBALLOS ESTANISLAO S.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'VALLEJOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'TRIPOLI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'REPUBLICA DE SAN MARINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'RATTI CESAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'QUEVEDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'QUINTANA JOSE DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'SANABRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ROSARIO DE LA FRONTERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'ROBINSON CARLOS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'RIO SALADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'RODRIGUEZ PIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PAGANO ANGELINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PAREJA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'OTTAWA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PEREZ ROSALES VICENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PAZ MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1419',
//     city: 'PODESTA JOSE J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'PICHEUTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'RIVADAVIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ROSARIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SALAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'QUEROL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'PROVINCIAS UNIDAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'REPUBLICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'REPUBLICA DE INDONESIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'RIGLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'VALLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'VERNET AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ZELARRAYAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ZAÑARTU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'VIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'VIDELA NICOLAS E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'TEJEDOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'THOMPSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SAN IRENEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SAN JOSE DE CALASANZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SENILLOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SARAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'SANTANDER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ZUVIRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CORONDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'COBO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CASTAÑARES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CARICANCHA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CAMPOS GASPAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CAPERUCITA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'EL ARTESANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DIAZ AVELINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DIRECTORIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DOBLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DEL TRABAJO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DEL PROGRESO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DE LAS ARTES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DE LAS CIENCIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DE LAS GARANTIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DEL COMERCIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DEL BUEN ORDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'DE LA INDUSTRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CHACO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CRAIG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ALBARRACIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ALBERDI JUAN BAUTISTA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ASAMBLEA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BERTRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BEAUCHEF'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BELL VILLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BARCO CENTENERA DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BALBASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BONIFACIO JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'BUTTELER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'CACHIMAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'LA CAPITAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'LA GARZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'LA NAVE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'LA MAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'MITRE EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'MATORRAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'MAITEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'MORENO JOSE MARIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'MONTE DINERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'GUAYAQUIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'GOYENA PEDRO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'GIMENEZ ANGEL M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'GOMEZ SOMAVILLA JOAQUIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'HUALFIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'IGUALDAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'FRATERNIDAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'FORMOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'FERRARI ANTONINO M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'ESTRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1424',
//     city: 'EL MAESTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ELIZALDE RUFINO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'EL LAZO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ESTRADA JUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'FIGUEROA ALCORTA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'FITZ ROY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'FRAY JUSTO SANTAMARIA DE ORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'FREYRE MARCELINO E. CNEL. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'FRENCH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GALLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GALILEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'HUMBOLDT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'IRAOLA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'JUNCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'JUSTO JUAN B. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'JAURES JEAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ISABEL INFANTA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GODOY CRUZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GELLY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GELLY Y OBES GRAL. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GONZALEZ JULIO VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GUATEMALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GUEMES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GUIDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GUTIERREZ JUAN MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GUISE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'GURRUCHAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'MORA FERNANDEZ JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'MONTT PEDRO PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'OBARRIO MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'NEWTON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'MALABIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'MANSILLA LUCIO NORBERTO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'MEDRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LAFINUR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LAS HERAS GENERAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LAPRIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LUGONES LEOPOLDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LOPEZ VICENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LEVENE RICARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'LEVILLIER ROBERTO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CABELLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BUSCHIAZZO JUAN A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BULLRICH INTENDENTE AVENIDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BULNES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BOLLINI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BONPLAND'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BILLINGHURST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BERUTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BERRO ADOLFO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'BIBILONI JUAN ANTONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AUSTRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ARJONILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ARMENIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AREVALO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ARENALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ARAOZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AEROLINEAS ARGENTINAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AGOTE LUIS DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AGUERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'AGUADO ALEJANDRO MARIA DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ALSINA VALENTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ALVAREZ JULIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ANASAGASTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ANCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ANCHORENA TOMAS MANUEL DE DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'COUTURE EDUARDO JUAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'COSTA EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DARREGUEYRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CHARCAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DEL SIGNO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DEMARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DIAZ CORONEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'DORREGO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ECUADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CANE MIGUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CAMPOS LUIS MARIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CARRANZA ANGEL JUSTINIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CASARES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CASTEX'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CASTILLA RAMON MARISCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CAVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'COLOMBIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CERVIÑO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'CORONADO MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'COPERNICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ZOLA EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SERRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SEVILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SEGUI JUAN FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SARMIENTO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SCALABRINI ORTIZ RAUL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SANCHEZ DE BUSTAMANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SAN MATEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SAN MARTIN DE TOURS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SANTA FE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'THAMES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'TEDIN JUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SOLER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SINCLAIR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SIVORI EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'TAGLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'VIDT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'VIRASORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'VITTORIA FRANCISCO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ZENTENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'UGARTECHE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'TUPIZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'URIARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'REPUBLICA DE LA INDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'REPUBLICA DEL LIBANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'RAVIGNANI EMILIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'QUIRNO COSTA NORBERTO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'SALGUERO JERONIMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'RUGGIERI SILVIO L.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ROCHA DARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ROLDAN BELISARIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'PAUNERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'PEREYRA LUCENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'PEÑA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ORTIZ DE OCAMPO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'ORO (VER FRAY JUSTO SANTA MARIA DE ORO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'OMBU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'OCAMPO (VER ORTIZ DE OCAMPO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'OBLIGADO RAFAEL AVDA. COSTANERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'PACHECO DE MELO JOSE ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1425',
//     city: 'PARAGUAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'PALPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'OBLIGADO RAFAEL AVDA. COSTANERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'O\'HIGGINS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'OLAGUER Y FELIU VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'OLLEROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: '11 DE SEPTIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ORTEGA Y GASSET JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'PEREZ GREGORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'PINEDO INTENDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'PINO VIRREY DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VERTIZ VIRREY AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ZAPIOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ZARRAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ZAPATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ZABALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VUELTA DE OBLIGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VOLTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY VERTIZ (VER VERTIZ VIRREY AVDA.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY OLAGUER Y FELIU (VER OLAGUER Y FELIU VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY LORETO (VER LORETO VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY DEL PINO (VER PINO VIRREY DEL)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY ARREDONDO (VER ARREDONDO VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIRREY AVILES (VER AVILES VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VILLANUEVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'VIDAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'SUPERI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'SOLDADO DE LA INDEPENDENCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'TORNQUIST ERNESTO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: '3 DE FEBRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'SAN BENITO DE PALERMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'SAVIO MANUEL NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ZUBERBUHLER CARLOS E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CONDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CONESA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CORREGIDORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CESPEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CLAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CIUDAD DE LA PAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CARCANO RAMON J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CAMPOS LUIS MARIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CARBAJAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'DUMONT SANTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'DE LOS OMBUES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'DE LOS INCAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'DELGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CHENAUT INDALESIO GRAL. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CRAMER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CUBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'AMENABAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ALSINA VALENTIN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'AGUILAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARENAL CONCEPCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'AREVALO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARGUIBEL ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'AVILES VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARREDONDO VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ARRIBEÑOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'BELLO ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'BAEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'BUNGE INTENDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'CABILDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'LUGONES LEOPOLDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'LORETO VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'LACROZE FEDERICO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MENDEZ AGUSTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MIGUELETES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MIÑONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MATIENZO BENJAMIN TTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MAURE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MARTINEZ ENRIQUE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'NEWBERY JORGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'OBLIGADO (VER VUELTA DE OBLIGADO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'MOLDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'HERNANDEZ JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'GUERRICO INTENDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'GOROSTIAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'HUERGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'FREIRE RAMON CPTAN. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'GARCIA TEODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'FIGUEROA ALCORTA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1426',
//     city: 'ELCANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ELCANO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ESTOCOLMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ESTOMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ESPINOSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'FRAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'FOREST AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GARCIA TEODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GARMENDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GAMARRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'HOLMBERG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'JEREZ PEDRO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ITURRI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GIRARDOT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GIRIBONE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GUEVARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'HEREDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GUTENBERG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'GUZMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'MONTENEGRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'MONTALVO FERNANDO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'MOSCU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'MORLOTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'NUEVA ZELANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'NEWBERY JORGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'MAURE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LACROZE FEDERICO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LAS FLORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LAS INDIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LORETO VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LLERENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LEIVA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'LEMOS JUAN GREGORIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CALDAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BURELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BUCARELLI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BALBOA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BARZANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BAUNESS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BEHRING'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'BELGRADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'AVILES VIRREY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'AVALOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ARISMENDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ARENAL CONCEPCION'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ANDONAEGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ACHA MARIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ALTOLAGUIRRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ALVAREZ THOMAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ALVAREZ DONATO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CHARLONE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CHASSAING'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CHORROARIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DEL CAMPO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DE LOS INCAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DE LOS CONSTITUYENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DEL TEMPLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DEMARIA MARIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DUMONT SANTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'DONADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CAMPILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: '14 DE JULIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CESPEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CORRIENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'CORDOBA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'SAN MARTIN AVDA. (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'TORRENT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'TASSO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'STEPHENSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'VICTORICA BENJAMIN GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'VIRREYES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'VIRREY AVILES (VER AVILES VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'VIRREY LORETO (VER LORETO VIRREY)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'WARNES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'YERUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ZABALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ZARRAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'TRIUNVIRATO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'TRONADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PLAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PEREZ GREGORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PAZ SOLDAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'OLLEROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'OTERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'OSLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'OSORIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PALPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'RODNEY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'ROSETI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'QUIROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PUNTA ARENAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'PRAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1427',
//     city: 'RAULIES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'RAMSAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'RICCHIERI PABLO TTE. GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'PRINS ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'PUERTO PRINCIPE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'QUINTEROS LIDORO J. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ROOSEVELT FRANKLIN D.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'SAGASTA ISLA JOSE MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'SAENZ VALIENTE JUAN PABLO ALTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ROMERO DOMINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ROMERO EDUARDO SARGENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'RIVERA PEDRO IGNACIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'PAMPA (VER LA PAMPA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'PADRE JUAN BAUTISTA NEUMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: '11 DE SEPTIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'OLAZABAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'OBLIGADO RAFAEL AVDA. COSTANERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'O\'HIGGINS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'PLAZA VICTORINO DE LA DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: '3 DE FEBRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'TUNEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'UGARTE MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'UDAONDO GUILLERMO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'VELEZ BERNARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ZAVALIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ZAPIOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'VUELTA DE OBLIGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'VIDAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'SOURIGUES CARLOS TOMAS CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'SOLIER DANIEL DE ALMIRANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'SUCRE ANTONIO JOSE DE MARISCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'TEGUCIGALPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'TEMPERLEY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CONESA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CONDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CONGRESO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CAZADORES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CIUDAD DE LA PAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CASTAÑEDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CAMPOS LUIS MARIA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CANTILO INTENDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'DRAGONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ECHEVERRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'DEL TEJAR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CUBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CRAMER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'AMENABAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'AGOTE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'AUBAIN TEODORO DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ARRIBEÑOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'ARTILLEROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BETBEDER ONOFRE ALMTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BAVIO ERNESTO A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BASAVILBASO LEOPOLDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BARILARI ATILIO SIXTO ALTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'CABILDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BLANCO ENCALADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'BORCHES JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'LUGONES LEOPOLDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'LA PAMPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MIÑONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MIGUELETES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MENDOZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MENDEZ NICANOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'NEUMANN JUAN BAUTISTA PADRE (VER PADRE JUAN BAUTISTA NEUMANN)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'OBLIGADO (VER VUELTA DE OBLIGADO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MUNICH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MONTAÑESES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MONROE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MOLDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'MOM POLICARPO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'GUIRALDES INTENDENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'HERNANDEZ RAFAEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'GOLFARINI JUAN ANGEL DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'JURAMENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'HUSARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'FREIRE RAMON CPTAN. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'GARCIA MANUEL J. ALMTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'FIGUEROA ALCORTA PRESIDENTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428',
//     city: 'FITTE MARCELO J. DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1428      ',
//     city: 'AV. RICARDO BALBIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'GARCIA DEL RIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'FREIRE RAMON CPTAN. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'IBERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'JARAMILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'IRLANDA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'GRECIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'GUAYRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'MOLDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'MONTAÑESES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'OBLIGADO (VER VUELTA DE OBLIGADO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'NUÑEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'MANZANARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'MALHARRO MARTIN A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'LARRALDE CRISOLOGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'LUGONES LEOPOLDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CABILDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'BESARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'ARRIBEÑOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'AZURDUY JUANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'ARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'ARGELIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'ARIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'AMENABAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CRAMER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CUBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'DEHEZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'DEL LIBERTADOR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CAMPOS SALLES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CALZADILLA SANTIAGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CIUDAD DE LA PAZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CERRILLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CONESA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'CORREA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'TAMBORINI JOSE PASCUAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'SAN ISIDRO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'VIDAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'VILELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'VUELTA DE OBLIGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'ZAPIOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'VARAS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'VEDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: '3 DE FEBRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'USHUAIA PASAJE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PLUS ULTRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PINTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PISSARRO VICTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PEDRAZA MANUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'O\'HIGGINS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: '11 DE SEPTIEMBRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PAMPA (VER LA PAMPA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PAROISSIEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'RIVADAVIA MARTIN COMODORO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'RUIZ HUIDOBRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'QUINTANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'QUIROGA HORACIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'RAMALLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'QUESADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'PROMETEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1429',
//     city: 'RIO PIEDRAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PUENTE DEL INCA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'POSTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'QUESADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'RAMALLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'RUIZ HUIDOBRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ROOSEVELT FRANKLIN D.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SALINA GRANDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SALTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'RIVERA PEDRO IGNACIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PAROISSIEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PADILLA MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ORTIZ DE ZARATE RODRIGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'OLAZABAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PEDRAZA MANUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PEREZ ROQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PINO VIRREY DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PLAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'PLUTARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'VALDENEGRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'VALDERRAMA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'URTUBEY CLODOMIRO COMODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'TRONADOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'UGARTE MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'VEDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'WASHINGTON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'VILELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'VIRREY DEL PINO (VER PINO VIRREY DEL)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SANCTI SPIRITUS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SAN FRANCISCO DE ASIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'TAMBORINI JOSE PASCUAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SUCRE ANTONIO JOSE DE MARISCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SUPERI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'SOCRATES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CORREA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CONGRESO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CONDE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CISNE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CARBAJAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: '14 DE JULIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'DEL TEJAR AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ECHEVERRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'DONADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'DEHEZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'CHAJARI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ALVAREZ THOMAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ACHA MARIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ARIAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'AZURDUY JUANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'BESARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'BACH JUAN SEBASTIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'BLANCO ENCALADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'LUGONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MACHAIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'LE BRETON TOMAS A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'LARRALDE CRISOLOGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'LA PAMPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MANZANARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MARTINEZ ENRIQUE GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MENDOZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MELIAN AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MILLER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'NUÑEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'NAHUEL HUAPI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'NAON ROMULO S. DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MONROE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'MONTES VICTORIANO E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'HEREDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'JARAMILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'JURAMENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'IBERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'HOLMBERG'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'GARCIA DEL RIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'FOREST AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1430',
//     city: 'ESTOMBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'FERNANDEZ BLANCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'FERNANDEZ MACEDONIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'FOUILLER FELIX O.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'FLOR DEL AIRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GARCIA DEL RIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GAITO CONSTANTINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GAMARRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GANDARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GALVAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'IBERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'JURAMENTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'JARAMILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ISLANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'HAMBURGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GUTTERO ALFREDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GIRIBONE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GINEBRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'GERCHUNOFF ALBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MONROE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'NAPOLES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'NAHUEL HUAPI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'NUÑEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MILLER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MENDOZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MEDEYROS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MANZANARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MARSELLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LARRALDE CRISOLOGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LA GLORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LA HAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LA PAMPA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LE BRETON TOMAS A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LAVOISIER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LEGUIZAMON HONORIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LOPEZ BUCHARDO CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LONDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LIVERPOOL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LITUANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'MADARIAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'LUGONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BLANCO ENCALADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BONORINO MARTINIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CADIZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BURELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BUCARELLI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BUCAREST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BUDAPEST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BALLIVIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BANCHS ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BARZANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BAUNESS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BESARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BERTHELOT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BERLIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BERNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'BEETHOVEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'AVALOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'AROMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ATENAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ARIZONA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ANDONAEGUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ACHEGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ACHIRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'AGUAS BUENAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'AIZPURUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ALVAREZ THOMAS AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ALVAREZ DONATO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ALTOLAGUIRRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'AMAMBAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CHINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CULLEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'DIAZ COLODREDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ECHEVERRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'DUBLIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'DE LOS CONSTITUYENTES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'DE LA TECNICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CATRIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CAPDEVILA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CAMINO MIGUEL ANGEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CIVIT EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CERETTI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CONGRESO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'CONSTANTINOPLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'COPENHAGUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'SOFIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'SHAKESPEARE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'STORNI ALFONSINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TALAVERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'SUCRE ANTONIO JOSE DE MARISCAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TAMBORINI JOSE PASCUAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TARTAGAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TORRENT'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'VILELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'VICTORICA BENJAMIN GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'WILLIAMS ALBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ZADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'YRURTIA ROGELIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'VARSOVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: '20 DE FEBRERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TURIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TRIUNVIRATO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'TREVERIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'URDININEA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'VALDENEGRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PIRAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PESTALOZZI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PELLEGRINI CARLOS E.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PEDRAZA MANUELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'OLAZABAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'OHM'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PACHECO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PALMA ATHOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PAMPA (VER LA PAMPA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'PAROISSIEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'RIVERA PEDRO IGNACIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'ROOSEVELT FRANKLIN D.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'RUFINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'QUESADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'QUEBRACHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1431',
//     city: 'RASTREADOR FOURNIER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RAULET'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RIO CUARTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RIESTRA NORBERTO DE LA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'QUILMES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RAMIREZ CARLOS MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: '1RO. DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SAENZ AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SALVIGNY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SALDIAS ADOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ROMERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ROCA CORONEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RIVERA INDARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'RIVERA FRUCTUOSO GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PATAGONES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PAGOLA CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PADRE ENRIQUE CONTARDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'OCHOA ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PEDERNERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PAZOS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PAZ JOSE C.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PEPIRI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PEREZ JOAQUIN VALENTIN COMISARIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PERGAMINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PICHEUTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PIROVANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PITTALUGA EDUARDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PIZARRO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PLUMERILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'POMAR GREGORIO TTE. CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'PORTELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VALPARAISO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'USPALLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TRIANA RODRIGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TROLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TURQUIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VEGA VENTURA DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VAZ FERREIRA CARLOS DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VEDIA AGUSTIN DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VARELA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VARELA JACOBO ADRIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VELARDE PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: '27 DE FEBRERO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VERDAGUER JACINTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VERACRUZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'VENTANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ZAVALETA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TILCARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TRAFUL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'THOME JUAN M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TIERRA DEL FUEGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SUAREZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TABORDA DIOGENES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'TABARE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SOMELLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SANTA CATALINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SAN PEDRITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SEGUIN MARCOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SERVET'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'SANTO DOMINGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CONDOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CORRALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CORREA MORALES LUCIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CORTEJARENA JOSE A.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'COLMO ALFREDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'COLOMBO LEONI EDUARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'COLONIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CALIFORNIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CASTAÑON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DEL BAÑADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DEL TIGRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DRUMOND'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ECHAGUE CARLOS INGENIERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ECHAURI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'EINSTEIN ALBERTO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DIEZ DE MEDINA CLEMENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CULPINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CRUZ OSVALDO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CRESPO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CHILAVERT MARTINIANO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CHARRUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CHICLANA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DEKAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'DARACT AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CHUTRO PEDRO PROFESOR DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ANCASTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ALAGON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ALCORTA AMANCIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ALMAFUERTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'AGACES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ACHALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ACOSTA MARIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ARQUIMEDES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ARRIOLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ATUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BEAZLEY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BERON DE ASTRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BERG CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BERUTI ARTURO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BARROS PAZOS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BARCELONA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BARCO CENTENERA DEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BALIÑA PEDRO LUIS DOCTOR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CACIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CACHI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'CABRED DOMINGO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'BONORINO ESTEBAN CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LUGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LOS TELARES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LOREA ISIDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LOS PATOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MADERNA FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MAGNAUD JUEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LLORENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LUPPI ABRAHAM J.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LYNCH'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LEBENSOHN MOISES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LAVARDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LANZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LANCHEROS DEL PLATA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LAGUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LAGOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LA CONSTANCIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LACARRA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LABARDEN (VER LAVARDEN)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LAFUENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LA PLATA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LAS PALMAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'LA TRILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MARTINEZ CASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MARTI JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MARACAIBO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MAR DULCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MATORRAS DE SAN MARTIN GREGORIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MATANZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MENDEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MOCORETA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MIRAVE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MIRIÑAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'O\'GORMAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'NATAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MUJICA JOSE PIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MONTESQUIEU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MONTEAGUDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MOM'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'MORENO PERITO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GOMEZ INDALECIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GRITO DE ASENCIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GRAMAJO GUTIERREZ ALFREDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GUAYMALLEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GUAYQUIRARO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GUARANI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'GUAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ITAQUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'IRIGOYEN SANTOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'JANER ANA MARIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'JUANA DE ARCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'IRIARTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'IGUAZU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FERRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FERREYRA ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FOURNIER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FERNANDEZ DE LA CRUZ FRANCISCO GRAL. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FAMATINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'FALUCHO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ESTEVEZ JOSE INGENIERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ESQUIU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'EL CEIBO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'ELIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'EREZCANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1437',
//     city: 'EL REFRAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ESCALADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ESCALADA CELEDONIO COMANDANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FALUCHO SAN LUIS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FERNANDEZ DE LA CRUZ FRANCISCO GRAL. AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FONROUGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FRAGATA MALDONADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FRAGATA SARANDI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FRAGATA 25 DE MAYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'FERRE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GALLO DELFIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GARCIA PEDRO ANDRES CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'IBAÑEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HOMERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HICKEN CRISTOBAL M.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HUDSON GUILLERMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HUBAC'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HUDSON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ITAQUI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GUARDIA NACIONAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GUAMINI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GUERRICO MARTIN CONTRALMIRANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GUIRALDES RICARDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'HERMITTE ENRIQUE M. INGENIERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GRANDOLI MARTIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GORDILLO TIMOTEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA SANTA CRUZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA JULIET'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA MANUELITA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA FORTUNA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA INVENCIBLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'GOLETA JULIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MONTREAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MONTIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MURGUIONDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'NANKIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MIRALLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MATTEOTI GIACOMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MANAGUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MALAGA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'MALDONADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LA ROSA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LARRAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LARRAZABAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'KRAUSE JULIO ING.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LA MESOPOTAMIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LEGUIZAMON MARTINIANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LOGROÑO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'LOPEZ CANDIDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CAFAYATE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BALBASTRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BALANDRA CARMEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BARCA CABO DE HORNOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BARROS PAZOS JOSE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BASUALDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN VIGILANTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERMEJO ANTONIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERON DE ASTRADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN CONGRESO NACIONAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN ECHAGUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN GENERAL BALCARCE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN GENERAL BELGRANO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN GOLETA ESPORA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'BERGANTIN NANCY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'AQUINO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ARAUJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ARGENTINA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ALFARERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ALBARIÑO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ALVAREZ CRISOSTOMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CHILAVERT MARTINIANO CNEL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'COSTAMAGNA SANTIAGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CORVALAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'COSQUIN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CUTER LUISITO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CURA BROCHERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DIAZ ANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'EGUIA OSVALDO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ECHEANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: '2 DE ABRIL DE 1982'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DEL TRABAJO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DELLEPIANE LUIS J. TTE. GENERAL (AUT. EZEIZA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DERQUI AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DESCALZI NICOLAS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DE SIMONE VICENTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'DEL COLEGIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CASTAÑARES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CARHUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CASCO HORACIO DR.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CALOU JUAN P.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CAÑONERA AMERICA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CAÑADA DE GOMEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'COMBATE DE SAN CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CORRALES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CORBETA AGREABLE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'CORBETA BELFAST'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SANTANDER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SARAVIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SARAZA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SCAPINO RODOLFO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SAVIO GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SAYOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SOMELLERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'STRANGFORD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SORIA EZEQUIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SOLDADO DE LA FRONTERA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SUMACA SANTISIMA TRINIDAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SUMACA ITATI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'TABARE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SUAREZ JOSE LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'TORRE LISANDRO DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ZELARRAYAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'WHITE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'VILLA DE MASNOU'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'VILLEGAS CONRADO EXCELSO GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: '27 DE FEBRERO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'UNANUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'URIBURU NAPOLEON GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'POLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'PIEDRA BUENA LUIS COMANDANTE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'PILAR'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'OLASCOAGA MANUEL JOSE CORONEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'OLIDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'OZANAM FEDERICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'PAILEBOT DAVISON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RIVERA FRUCTUOSO GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ROCA CORONEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'SALADILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RUIZ MORENO JULIO GENERAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'POSTA DE HORNILLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RACEDO EDUARDO TTE. GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RIESTRA NORBERTO DE LA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RIO NEGRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'RAMIREZ CEFERINO COMODORO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1439',
//     city: 'ZUVIRIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ZEQUEIRA SEVERO GARCIA GRANDE DE (VER GARCIA GRANDE DE ZEQUEIRA SEVERO)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'REMEDIOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PRIMOLI JUAN BAUTISTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PRIMERA JUNTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SALA CANDIDO DE LA TTE. DE NAVIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SALADILLO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'RODO JOSE ENRIQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'OLIVOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'OLIDEN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'OLAVARRIETA DIEGO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PAZ GENERAL AVDA. (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PILA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PIERES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PILAR (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PILAR (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'POLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'PIZARRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'VEGA BELGRANO CARLOS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'VIEJOBUENO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ZELADA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'YRUPE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'TORRE LISANDRO DE LA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'TAPALQUE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'TANDIL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SUAREZ JOSE LEON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SUECIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SPIRO SAMUEL CAPITAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SCHMIDL ULRICO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SAN PEDRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'SAN JUAN BAUTISTA DE LA SALLE AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CAÑADA DE GOMEZ'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CARHUE (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CARDENAS CORONEL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CARHUE (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CAROYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CATANIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CASTRO EMILIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'DE LOS CORRALES AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'DIRECTORIO AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CURITYBA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CUYO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CORVALAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CORTES GERONIMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'COSQUIN (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'COSQUIN (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'COTOCOLLAO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CHICOANA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CHASCOMUS'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CHAMICAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ANDALGALA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'AMANCAY'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ALBARIÑO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ALBERDI JUAN BAUTISTA AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ACONCAGUA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ACASSUSO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'AGUIRRE JULIAN'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ARAUJO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ANKARA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ANTOFAGASTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ARTIGAS MANUEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BENIELLI CARLOS JAVIER'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BECHER EMILIO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BERMUDEZ JORGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BIANCHI ANDRES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BASUALDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CAFAYATE (IMPAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'CAFAYATE (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BRAGADO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'BILBAO FRANCISCO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LEGUIZAMON MARTINIANO (IMP.)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LEGUIZAMON MARTINIANO (PAR)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LUXEMBURGO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LA FONTAINE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LAFERRERE GREGORIO DE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LARRAZABAL AVDA.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LARRAYA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LA QUENA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'LASSERRE AUGUSTO ALTE.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MIRALLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MUZILLI CAROLINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MURGUIONDO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MONTIEL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MOLINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'MONTE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'GORDILLO TIMOTEO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'GUAMINI'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'GUARDIA NACIONAL'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'JUNTA (VER PRIMERA JUNTA)'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'GARZON EUGENIO GRAL.'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'GARCIA GRANDE DE ZEQUEIRA SEVERO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FINLANDIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FLORESTA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FRAGATA TRINIDAD'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FRAGATA LA ARGENTINA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FONROUGE'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FRAGATA CEFIRO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FRAGATA HALCON'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'FRAGATA HERCULES'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ESTONIA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ERCILLA'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1440',
//     city: 'ERASMO'
//   },
//   {
//     code: '001',
//     department: 'CAPITAL FEDERAL',
//     zip: '1598',
//     city: 'SALMUN FEIJOO JOSE AARON'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '1987',
//     city: 'ESPARTILLAR (ADOLFO ALSINA)'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6337',
//     city: 'MARIA P. MORENO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6338',
//     city: 'LEUBUCO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'LA PALA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'CHOPI TALO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'FRANCISCO MURATURE'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'COLONIA MURATURE'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'EL PARQUE'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6341',
//     city: 'COLONIA NAVEIRA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6343',
//     city: 'LOS GAUCHOS (APEADERO FCDFS)'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6343',
//     city: 'THAMES'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6343',
//     city: 'VILLA MAZA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6343',
//     city: 'MAZA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'VILLA EPUMER'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'POCITO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'ADOLFO ALSINA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'CARHUE'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'ROLITO (ESTACION FCGB)'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6430',
//     city: 'JUAN V. CILLEY'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6431',
//     city: 'ESTACION LAGO EPECUEN'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6431',
//     city: 'LAGO EPECUEN'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6437',
//     city: 'ARROYO VENADO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6441',
//     city: 'RIVERA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6441',
//     city: 'COLONIA BARON HIRSCH'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6443',
//     city: 'TRES LAGUNAS'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6443',
//     city: 'YUTUYACO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '6443',
//     city: 'ARANO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8170',
//     city: 'ABRA DE HINOJO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8183',
//     city: 'AVESTRUZ'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'LA FLORIDA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'LA ZULEMA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'CAMPO LOS AROMOS'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'VILLA MARGARITA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'VILLA SAN ANTONIO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'COLONIA SAPIN'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'CAMPO SAN JUAN'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'COLONIA LAPIN'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'ESTEBAN A. GASCON'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'COLONIA SANTA MARIANA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'CAMPO DEL NORTE AMERICANO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'SAN ANTONIO'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'CANONIGO GORRITI'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'CAMPO LA ZULEMA'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'SAN MIGUEL ARCANGEL'
//   },
//   {
//     code: '007',
//     department: 'ADOLFO ALSINA',
//     zip: '8185',
//     city: 'DELFIN HUERGO'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7500',
//     city: 'CLAUDIO C. MOLINA'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7513',
//     city: 'ADOLFO GONZALES CHAVES'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7513',
//     city: 'EL LUCERO'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7513',
//     city: 'GONZALES CHAVES'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7515',
//     city: 'PEDRO P. LASSALLE'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7515',
//     city: 'DE LA GARMA'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7517',
//     city: 'MARIANO ROLDAN'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7517',
//     city: 'PIERINI'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7517',
//     city: 'JUAN E. BARRA'
//   },
//   {
//     code: '014',
//     department: 'ADOLFO GONZALES CHAVES',
//     zip: '7519',
//     city: 'VASQUEZ'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6621',
//     city: 'PRESIDENTE QUINTANA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6627',
//     city: 'LA VICTORIA (DESVIO)'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6627',
//     city: 'ACHUPALLAS'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6627',
//     city: 'GRISOLIA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6627',
//     city: 'HARAS EL CARMEN'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'COLONIA ZAMBUNGO'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'LA DORMILONA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'LA CARLOTA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'CORONEL SEGUI'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'CORONEL MOM'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'PALEMON HUERGO'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'VILLA MARIA (CNEL. SEGUI-PDO. ALBERTI)'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6628',
//     city: 'VILLA ORTIZ'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'EMITA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'LARREA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'ALBERTI'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'PLA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'ANDRES VACCAREZZA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6634',
//     city: 'MECHITA'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6640',
//     city: 'PALANTELEN'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6643',
//     city: 'BAUDRIX'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6643',
//     city: 'SAN JOSE (BAUDRIX-PDO. ALBERTI)'
//   },
//   {
//     code: '021',
//     department: 'ALBERTI',
//     zip: '6648',
//     city: 'MECHA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '',
//     city: 'SAN JOSÉ'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '',
//     city: 'BARRIO DON ORIONE ( CLAYPOLE  - ALTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'BARRIO SAN FERNANDO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'BARRIO VILLA LA PAZ'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'VILLA RATTI'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'BARRIO SAN CRISTOBAL'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'VILLA LA PAZ'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'VILLA TURDERA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1834',
//     city: 'VILLA SASTRE'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'BARRIO LOMA VERDE'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'BARRIO LA TABLADA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'ADROGUE'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'ALMIRANTE BROWN'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'JOSE MARMOL'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1846',
//     city: 'BARRIO SAN JUAN (ALMIRANTE BROWN-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO GUADALUPE (RAFAEL CALZADA-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO ASUNCION'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO ZABALA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'VILLA LAURA (RAFAEL CALZADA-PDO. ALMTE. BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO SAN PEDRO (RAFAEL CALZADA-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO VILLA LAURA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO SAN JAVIER'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'BARRIO LA GLORIA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'RAFAEL CALZADA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1847',
//     city: 'VILLA CALZADA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO LA JOVITA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO SANZ'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO EL TREBOL'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO PARQUE MARIANO MORENO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO LAS TUNAS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO SAN LUCAS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO SANTA CLARA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'CLAYPOLE'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1849',
//     city: 'BARRIO EL PATRONATO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'MINISTRO RIVADAVIA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO LA CARLOTA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO LA CUMBRE (BURZACO-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BURZACO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO DOÑA SOL'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO SAKURA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO EL HORNERO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO ARZENO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1852',
//     city: 'BARRIO EL GAUCHO (BURZACO-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854',
//     city: 'BARRIO GENERAL BELGRANO (LONGCHAMPS-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854',
//     city: 'BARRIO DON LUIS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854',
//     city: 'LONGCHAMPS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854',
//     city: 'BARRIO RAYO DE SOL (LONGCHAMPS-PDO. ALMIRANTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854',
//     city: 'BARRIO LOS ALAMOS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1854      ',
//     city: 'BARRIO VIPLASTIC  (LONGCHAMPS - ALTE BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'BARRIO LA REFORMA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'GLEW'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'VILLA PARIS'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'BARRIO GORRITI'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'BARRIO PARQUE ROMA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'BARRIO ALMAFUERTE (GLEW-PDO. ALMTE. BROWN)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1856',
//     city: 'BARRIO PARQUE IPONA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1858',
//     city: 'VILLA NUMANCIA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1881',
//     city: 'BARRIO SANTOS VEGA'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1881',
//     city: 'KILOMETRO 46 (PARADA FCGB)'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1881',
//     city: 'SAN FRANCISCO SOLANO'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1881',
//     city: 'CAMINO GRAL. BELGRANO (KM. 14 AL 17'
//   },
//   {
//     code: '028',
//     department: 'ALMIRANTE BROWN',
//     zip: '1881',
//     city: 'BARRIO DRAIMAR'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'KILOMETRO 5 (ESTACION FCGR)'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'VILLA CASTELLINO'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'PIÑEYRO (PDO. AVELLANEDA)'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'BULLRICH'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'VILLA PORVENIR'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'GERLI (PARTIDO AVELLANEDA)'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'VILLA POBLADORA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'LA MOSCA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'VILLA MERCADO'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'CRUCECITA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'AVELLANEDA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1870',
//     city: 'VILLA MODELO'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1871',
//     city: 'ISLA MACIEL'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1871',
//     city: 'DOCK SUD'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1872',
//     city: 'COSTA DE SARANDI'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1872',
//     city: 'LA COSTA (SARANDI-PDO. AVELLANEDA)'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1872',
//     city: 'SARANDI'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA NUÑEZ'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA HUE'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'BARRIO OBRERO VILLA AVELLANEDA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA CORINA'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA DOMINICO'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA BARILARI'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'VILLA ITE'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'LAS QUINTAS (VILLA DOMINICO-PDO. AVELLANEDA)'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1874',
//     city: 'COSTA DE VILLA DOMINICO'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1875',
//     city: 'VILLA GONNET'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1875',
//     city: 'WILDE'
//   },
//   {
//     code: '035',
//     department: 'AVELLANEDA',
//     zip: '1875',
//     city: 'WILDE ESTE'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7150',
//     city: 'SAN IGNACIO'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7150',
//     city: 'SAN LAUREANO'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7150',
//     city: 'AYACUCHO'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7151',
//     city: 'MAGALLANES'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7151',
//     city: 'LANGUEYU'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7151',
//     city: 'UDAQUIOLA'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7151',
//     city: 'SOLANET'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7151',
//     city: 'LAS SULTANAS'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7153',
//     city: 'CANGALLO'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7153',
//     city: 'FAIR'
//   },
//   {
//     code: '042',
//     department: 'AYACUCHO',
//     zip: '7153',
//     city: 'LA CONSTANCIA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7214',
//     city: 'LAGUNA MEDINA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7214',
//     city: 'MIRAMONTE'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7214',
//     city: 'CACHARI'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'LA COLORADA (AZUL-PDO. AZUL)'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'CAMINERA AZUL'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'SHAW'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'LA MANTEQUERIA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'LAS CORTADERAS'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'ESTACION LAZZARINO'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7300',
//     city: 'AZUL'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7301',
//     city: 'PABLO ACOSTA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7301',
//     city: 'ARROYO DE LOS HUESOS'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7301',
//     city: 'ARIEL'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7301',
//     city: 'EUFEMIO UBALLES'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7301',
//     city: 'FRANCISCO J. MEEKS'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7305',
//     city: 'CAMPODONICO'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7311',
//     city: 'MARTIN FIERRO (CHILLAR-PDO. AZUL)'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7311',
//     city: 'SAN RAMON DE ANCHORENA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7311',
//     city: 'LA PROTEGIDA (PDO. AZUL)'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7311',
//     city: 'CHILLAR'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7313',
//     city: 'BERNARDO VERA Y PINTADO'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7313',
//     city: 'LA NUTRIA'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7313',
//     city: 'DIECISEIS DE JULIO'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7313',
//     city: 'KILOMETRO 433'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7316',
//     city: 'PARISH'
//   },
//   {
//     code: '049',
//     department: 'AZUL',
//     zip: '7316',
//     city: 'LA CHUMBEADA (AZUL-PDO. AZUL)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '',
//     city: 'BARRIO ROSENDO LOPEZ(BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO ALMAFUERTE (BAHIA BLANCA-PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA FLORESTA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA CERRITO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO LOMA PARAGUAYA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA DELFINA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA OLGA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO MALDONADO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO AVELLANEDA (PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BAHIA BLANCA NOROESTE'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'ADELA CORTI'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO PEDRO PICO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA ITALIA (BAHIA BLANCA-PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'CORONEL MALDONADO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA LORETO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO PARQUE PATAGONIA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA LIBRES'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO KILOMETRO 5'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA OBRERA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'PUERTO GALVAN'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BELLA VISTA (BAHIA BLANCA-PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO TIRO FEDERAL (BAHIA BLANCA-PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO VISTA ALEGRE (BAHIA BLANCA-PDO. B. BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO NOROESTE'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO LA FALDA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO SAN BLAS'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BORDEU'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO SAN ROQUE (BAHIA BLANCA-PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA SOLDATI'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA SANCHEZ ELIA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA DOMINGO PRONSATO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO SAN MARTIN (PDO. BAHIA BLANCA)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA NOCITO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO ROSARIO SUD'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'VILLA BUENOS AIRES'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BAHIA BLANCA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8000',
//     city: 'BARRIO VILLA MUÑIZ'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8101',
//     city: 'VILLA HARDING GREEN'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8101',
//     city: 'GRUNBEIN'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'GARRO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'SPURR'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'INGENIERO WHITE'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'PUERTO BAHIA BLANCA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'VILLA ROSAS'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8103',
//     city: 'VILLA SERRA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'LA MERCED'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'GENERAL CERRI'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'KILOMETRO 666 (APEADERO FCGR)'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'SAUCE CHICO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'COLONIA LA MERCED'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'GENERAL DANIEL CERRI'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'AGUARA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8105',
//     city: 'CUATREROS'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8107',
//     city: 'BASE AERONAVAL COMANDANTE ESPORA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8118',
//     city: 'COCHRANE'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8118',
//     city: 'CABILDO'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8118',
//     city: 'CORTI'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8122',
//     city: 'LA VITICOLA'
//   },
//   {
//     code: '056',
//     department: 'BAHIA BLANCA',
//     zip: '8122',
//     city: 'NAPOSTA'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7007',
//     city: 'LA ESPERANZA (NAPALEOFU-PDO. BALCARCE)'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7007',
//     city: 'NAPALEOFU'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'LAGUNA BRAVA'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'EL JUNCO'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'BALCARCE'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'LA BRAVA'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'BOSCH'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'LOS CARDOS'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'EL VERANO'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7620',
//     city: 'HARAS OJO DE AGUA'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7621',
//     city: 'RINCON DE BAUDRIX'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7621',
//     city: 'RAMOS OTERO'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7621',
//     city: 'LA SARA (RAMOS OTERO-PDO. BALCARCE)'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7621',
//     city: 'SAN SIMON'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7623',
//     city: 'CAMPO PELAEZ'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7623',
//     city: 'SAN AGUSTIN'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7623',
//     city: 'CAMPO LEITE'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7623',
//     city: 'LOS PINOS'
//   },
//   {
//     code: '063',
//     department: 'BALCARCE',
//     zip: '7623',
//     city: 'CAMPO LA PLATA'
//   },
//   {
//     code: '070',
//     department: 'BARADERO',
//     zip: '2761',
//     city: 'SANTA COLOMA'
//   },
//   {
//     code: '070',
//     department: 'BARADERO',
//     zip: '2938',
//     city: 'ALSINA'
//   },
//   {
//     code: '070',
//     department: 'BARADERO',
//     zip: '2942',
//     city: 'ESTACION BARADERO'
//   },
//   {
//     code: '070',
//     department: 'BARADERO',
//     zip: '2942',
//     city: 'BARADERO'
//   },
//   {
//     code: '070',
//     department: 'BARADERO',
//     zip: '2943',
//     city: 'IRENEO PORTELA'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'ARRECIFES'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'EL NACIONAL'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'CAÑADA MARTA'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'LA DELIA'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'VILLA SANGUINETTI'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'PUENTE CAÑETE'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2740',
//     city: 'LA NELIDA'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2754',
//     city: 'TODD'
//   },
//   {
//     code: '077',
//     department: 'ARRECIFES',
//     zip: '2754',
//     city: 'VIÑA'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7005',
//     city: 'AZUCENA'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7005',
//     city: 'VILLA CACIQUE'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7005',
//     city: 'BARKER'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7005',
//     city: 'KILOMETRO 404'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7005',
//     city: 'LA AZUCENA'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'ESTANCIA CHAPAR'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'CORONEL RODOLFO BUNGE'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'CAMINERA JUAREZ'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'BENITO JUAREZ'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'HARAS EL CISNE'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7020',
//     city: 'CHAPAR'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7021',
//     city: 'TEDIN URIBURU'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7021',
//     city: 'LOPEZ'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7313',
//     city: 'RICARDO GAVIÑA'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7313',
//     city: 'EL LUCHADOR'
//   },
//   {
//     code: '084',
//     department: 'BENITO JUAREZ',
//     zip: '7513',
//     city: 'ALZAGA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '',
//     city: 'JOSE FREIRE                                                                     '
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1665',
//     city: 'JUAN VUCETICH (APEADERO FCGU)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA ESPAÑA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO LUCHETTI'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO SAN ROQUE (BERAZATEGUI-PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA SOL'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BERAZATEGUI'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA MITRE'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO LA LOMA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO SAN JUAN (BERAZATEGUI-PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO EL ONCE'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO LOS TRONCOS'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA JULIA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA OLIVERO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO LOS PINOS (PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO LOS MANZANOS'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO GENERAL BELGRANO (BERAZATEGUI-PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'VILLA SAN FRANCISCO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO RAYO DE SOL (BERAZATEGUI-PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO CENTENARIO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1884',
//     city: 'BARRIO JACARANDA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'LOS MANZANOS'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'PUEBLO NUEVO (GUILLERMO E. HUDSON-PDO. BERAZATEGUI)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'GUILLERMO E. HUDSON'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'BARRIO MARITIMO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'PLATANOS'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'VILLA MATILDE'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'BARRIO SNIAFA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'VILLA REAL'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1885',
//     city: 'PUEBLO VIEJO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'RANELAGH'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'VILLA CLARA'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'CARLOS T. SOURIGUES'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'CAMINO GRAL. BELGRANO (KM. 27 AL 30'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'RIO ENCANTADO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'VILLA GIAMBRUNO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1886',
//     city: 'JOHN F. KENNEDY'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1890',
//     city: 'RUTA 2 KILOMETRO 32 AL 36'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1890',
//     city: 'CAMINO GRAL. BELGRANO (KM. 31 AL 35)'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1890',
//     city: 'BARRIO LAS HERMANAS'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1890',
//     city: 'JUAN MARIA GUTIERREZ'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1893',
//     city: 'MONTARAZ'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1893',
//     city: 'CENTRO AGRICOLA EL PATO'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1893',
//     city: 'RUTA 2 KILOMETRO 37 AL 45'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1893',
//     city: 'RUTA 2 KILOMETRO 44'
//   },
//   {
//     code: '091',
//     department: 'BERAZATEGUI',
//     zip: '1894',
//     city: 'PEREYRA (PDO. BERAZATEGUI)'
//   },
//   {
//     code: '098',
//     department: 'BERISSO',
//     zip: '1888',
//     city: 'VILLA SAN CARLOS'
//   },
//   {
//     code: '098',
//     department: 'BERISSO',
//     zip: '1923',
//     city: 'LOS TALAS'
//   },
//   {
//     code: '098',
//     department: 'BERISSO',
//     zip: '1923',
//     city: 'ARROYO LA MAZA'
//   },
//   {
//     code: '098',
//     department: 'BERISSO',
//     zip: '1923',
//     city: 'ARROYO DEL PESCADO'
//   },
//   {
//     code: '098',
//     department: 'BERISSO',
//     zip: '1923',
//     city: 'BERISSO'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6511',
//     city: 'HALE'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6511',
//     city: 'VILLA SANZ'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6550',
//     city: 'MIRAMAR (BOLIVAR-PDO. BOLIVAR)'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6550',
//     city: 'EL PORVENIR (BOLIVAR-PDO. BOLIVAR)'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6550',
//     city: 'LA PERLA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6550',
//     city: 'SANTA ISABEL (BOLIVAR-PDO. GRAL. ALVEAR)'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6550',
//     city: 'BOLIVAR'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6551',
//     city: 'UNZUE'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6551',
//     city: 'JUAN F. IBARRA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6551',
//     city: 'PIROVANO'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6553',
//     city: 'URDAMPILLETA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6553',
//     city: 'NUEVA ESPAÑA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6553',
//     city: 'LA TORRECITA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6553',
//     city: 'VILLA LYNCH (URDAMPILLETA-PDO. BOLIVAR)'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6557',
//     city: 'PAULA'
//   },
//   {
//     code: '105',
//     department: 'BOLIVAR',
//     zip: '6557',
//     city: 'VALLIMANCA'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6013',
//     city: 'IRALA'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6640',
//     city: 'BRAGADO'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6640',
//     city: 'LA MARIA'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6640',
//     city: 'ASAMBLEA'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6641',
//     city: 'COMODORO PY'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6643',
//     city: 'ARAUJO'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6643',
//     city: 'COLONIA PALANTELEN'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6645',
//     city: 'MAXIMO FERNANDEZ'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6645',
//     city: 'LA LIMPIA (PDO. BRAGADO)'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6646',
//     city: 'WARNES'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6646',
//     city: 'COLONIA SAN EDUARDO'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6646',
//     city: 'GENERAL O BRIEN'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6648',
//     city: 'MECHITA'
//   },
//   {
//     code: '112',
//     department: 'BRAGADO',
//     zip: '6652',
//     city: 'OLASCOAGA'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'KILOMETRO 82 (APEADERO FCGR) (CNEL. BRANDSEN-PDO. BRANDSEN)'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'BARRIO LA DOLLY'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'LOS MERINOS'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'CORONEL BRANDSEN'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'SAMBOROMBON'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1980',
//     city: 'BARRIO LAS MANDARINAS'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1981',
//     city: 'OLIDEN'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1983',
//     city: 'GOMEZ'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1983',
//     city: 'GOMEZ DE LA VEGA'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1986',
//     city: 'ALTAMIRANO'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1986',
//     city: 'KILOMETRO 95 (EMBARCADERO FCGR) (ALTAMIRANO-PDO. GRAL. PAZ)'
//   },
//   {
//     code: '119',
//     department: 'BRANDSEN',
//     zip: '1986',
//     city: 'JEPPENER'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '',
//     city: 'LAS CAMPANAS  (CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '',
//     city: 'BARRIO SIDERCA ROJO (CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '',
//     city: 'LA JOSEFA (CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '1649',
//     city: 'ARROYO NEGRO (TIGRE-PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '1649',
//     city: 'ARROYO CORTO (TIGRE-PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2751',
//     city: 'ALMACEN EL CRUCE'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2802',
//     city: 'OTAMENDI'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2802',
//     city: 'INGENIERO ROMULO OTAMENDI'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2802',
//     city: 'RIO LUJAN (PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'KILOMETRO 88 (DESVIO PARTICULAR FCGM) (CAMPANA-PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'BARRIO VILLA NUEVA'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'BARRIO LUBO'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'RUTA 9 KILOMETRO 72'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'EL FENIX'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'LOS CEDROS'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'ALTO LOS CARDALES'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'CAMPANA'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2804',
//     city: 'BARRIO LAS ACACIAS (CAMPANA-PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'LA HORQUETA (PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO CARABELITAS'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO LAS ROSAS (CAMPANA-PDO. CAMPANA)'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO EL AHOGADO'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO ZANJON'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO PESQUERIA'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'CANAL LEANDRO N. ALEM. 1A. SECCION'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO ÑACURUTU CHICO'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO TAJIBER'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO ALELI'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'BLONDEAU'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'ARROYO LOS TIGRES'
//   },
//   {
//     code: '126',
//     department: 'CAMPANA',
//     zip: '2805',
//     city: 'CANAL LEANDRO N. ALEM. 2A. SECCION'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1414',
//     city: 'BARRIO SAN ESTEBAN - BARRIO LOS POZOS'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1808',
//     city: 'VICENTE CASARES'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1808',
//     city: 'FRANCISCO CASAL'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1808',
//     city: 'ALEJANDRO PETION (APEADERO FCGR)'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1812',
//     city: 'MAXIMO PAZ'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1814',
//     city: 'LA GARITA'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1814',
//     city: 'CAÑUELAS'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1814',
//     city: 'BARRIO PRIMERO DE MAYO'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1814',
//     city: 'LA NORIA'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1814',
//     city: 'KILOMETRO 59 (APEADERO FCGR)'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1815',
//     city: 'URIBELARREA'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1815',
//     city: 'ESCUELA AGRICOLA DON BOSCO'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1816',
//     city: 'COLONIA SANTA ROSA'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1816',
//     city: 'RUTA 205 KILOMETRO 57'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1816',
//     city: 'VILLA ADRIANA'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1816',
//     city: 'RUTA 3 KILOMETRO 75'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '1816',
//     city: 'LOS AROMOS'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '7221',
//     city: 'KILOMETRO 88 (APEADERO FCGB) (GDOR. UDAONDO-PDO. CAÑUELAS)'
//   },
//   {
//     code: '134',
//     department: 'CAÑUELAS',
//     zip: '7221',
//     city: 'GOBERNADOR UDAONDO'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '1613',
//     city: 'BARRIO SAN JORGE (LOS POLVORINES-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'HARAS LOS CARDALES'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'ARROYO DE LUNA'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'RETIRO SAN PABLO'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'EL SILENCIO'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'COLEGIO SAN PABLO'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'LA LUISA'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'CAMPO LA ELISA'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2752',
//     city: 'CAPITAN SARMIENTO'
//   },
//   {
//     code: '140',
//     department: 'CAPITAN SARMIENTO',
//     zip: '2754',
//     city: 'CAMPO CRISOL'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6530',
//     city: 'CARLOS CASARES'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6530',
//     city: 'SANTO TOMAS'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6530',
//     city: 'SAN JUAN DE NELSON'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'GOBERNADOR ARIAS'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'COLONIA MAURICIO'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'SMITH'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'ALGARROBO (COLONIA MAURICIO-PDO. CARLOS CASARES)'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'MAURICIO HIRSCH'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'COLONIA LA ESPERANZA'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6531',
//     city: 'MOCTEZUMA'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6535',
//     city: 'LA SOFIA'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6535',
//     city: 'CENTENARIO'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6535',
//     city: 'CADRET'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6535',
//     city: 'SANTA MARIA DE BELLOCQ'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6535',
//     city: 'BELLOCQ'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6537',
//     city: 'ORDOQUI'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6537',
//     city: 'EL CAMOATI'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6537',
//     city: 'ESTANCIA SAN CLAUDIO'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6537',
//     city: 'HORTENSIA'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6537',
//     city: 'EL CARPINCHO'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6538',
//     city: 'LA DORITA'
//   },
//   {
//     code: '147',
//     department: 'CARLOS CASARES',
//     zip: '6538',
//     city: 'SANTO TOMAS CHICO'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6077',
//     city: 'NECOL (ESTACION FCGM)'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6077',
//     city: 'ENCINA'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6231',
//     city: 'CUENCA'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6231',
//     city: 'TRES ALGARROBOS'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6233',
//     city: 'HEREFORD'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6451',
//     city: 'LOS INDIOS (CURARU-PDO. CARLOS TEJEDOR)'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6451',
//     city: 'SAN CARLOS'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6451',
//     city: 'CURARU'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6451',
//     city: 'MARUCHA (ESTACION FCGM)'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6455',
//     city: 'HUSARES'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6455',
//     city: 'CARLOS TEJEDOR'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6455',
//     city: 'DRYSDALE'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6457',
//     city: 'TIMOTE'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6457',
//     city: 'INGENIERO BEAUGEY'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6457',
//     city: 'KILOMETRO 386 (APEADERO FCDFS)'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6459',
//     city: 'SANTA INES (PDO. CARLOS TEJEDOR)'
//   },
//   {
//     code: '154',
//     department: 'CARLOS TEJEDOR',
//     zip: '6459',
//     city: 'COLONIA SERE'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'CARMEN DE ARECO'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'ESTRELLA NACIENTE'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'LA CENTRAL'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'SAN ERNESTO'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'TATAY'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6725',
//     city: 'PARADA TATAY'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6727',
//     city: 'TRES SARGENTOS'
//   },
//   {
//     code: '161',
//     department: 'CARMEN DE ARECO',
//     zip: '6727',
//     city: 'GOUIN'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7101',
//     city: 'CANAL 15'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7101',
//     city: 'CERRO DE LA GLORIA'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'PARQUE TAILLADE'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'CASTELLI'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'TAILLADE'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'LA COSTA (CASTELLI-PDO. CASTELLI)'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'CENTRAL GUERRERO'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'LA CORINCO'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'SAN JOSE DE GALI'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7114',
//     city: 'LA INDIA'
//   },
//   {
//     code: '168',
//     department: 'CASTELLI',
//     zip: '7116',
//     city: 'GUERRERO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2711',
//     city: 'PARAJE SANTA ROSA'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2711',
//     city: 'COLONIA LA VANGUARDIA'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2711',
//     city: 'ALMACEN PIATTI'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2711',
//     city: 'SAN FEDERICO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2711',
//     city: 'PEARSON'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2718',
//     city: 'LIERRA ADJEMIRO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2718',
//     city: 'VILLA DAFONTE'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2718',
//     city: 'LOPEZ MOLINARI'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2720',
//     city: 'EL PELADO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2720',
//     city: 'COLON'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2720',
//     city: 'HARAS EL PELADO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2720',
//     city: 'VILLA MANUEL POMAR(COLON)'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2721',
//     city: 'SARASA'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2721',
//     city: 'EL ARBOLITO'
//   },
//   {
//     code: '175',
//     department: 'COLON',
//     zip: '2723',
//     city: 'ESTANCIA LAS GAMAS'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'VILLA HERMINIA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'CALDERON'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'ALDEA ROMANA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'GALVAN'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'VILLA GRAL. ARIAS'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8101',
//     city: 'KILOMETRO 11 (APEADERO FCGR)'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'KILOMETRO 652 (APEADERO FCGR)'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'BALNEARIO (PARADA)'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'BARRIO EL CASTILLO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'ALMIRANTE SOLIER'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'PEHUEN CO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'VILLA MAIO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'BARRIO CIUDAD ATLANTIDA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'PUNTA ALTA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'VILLA LAURA (PUNTA ALTA-PDO. CNEL. DE MARIA LEONARDO ROSALES)'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'DESVIO SANDRINI'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'VILLA DEL MAR'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8109',
//     city: 'LA MARTINA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8111',
//     city: 'ISLA CATARELLI'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8111',
//     city: 'PUERTO BELGRANO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8111',
//     city: 'MUELLE PUERTO BELGRANO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8111',
//     city: 'ARROYO PAREJA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8111',
//     city: 'PUERTO ROSALES'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8113',
//     city: 'BATERIAS'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8115',
//     city: 'LAS OSCURAS'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8115',
//     city: 'PASO MAYOR'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8115',
//     city: 'BAJO HONDO'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8115',
//     city: 'PUENTE LAS OSCURAS'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8115',
//     city: 'LA VIRGINIA'
//   },
//   {
//     code: '182',
//     department: 'CORONEL ROSALES',
//     zip: '8118',
//     city: 'CORONEL FALCON'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '7507',
//     city: 'IRENE'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '7507',
//     city: 'EL BOMBERO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '7509',
//     city: 'ORIENTE'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'CAMPO LA LIMA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'EL ZORRO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'LA LUNA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'CORONEL DORREGO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'LA SIRENA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'FARO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'PARAJE LA RUTA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8150',
//     city: 'PARAJE LA RUTA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8151',
//     city: 'GIL'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8151',
//     city: 'NICOLAS DESCALZI'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8151',
//     city: 'ZUBIAURRE'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8151',
//     city: 'KILOMETRO 563'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8151',
//     city: 'LA AURORA (NICOLAS DESCALZI-PDO. CNEL. DORREGO)'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8154',
//     city: 'LA SOBERANA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8154',
//     city: 'SAN ROMAN'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8154',
//     city: 'CALVO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8156      ',
//     city: 'EL PERDIDO'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8156',
//     city: 'JOSE A. GUISASOLA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8158',
//     city: 'PARAJE LA AURORA'
//   },
//   {
//     code: '189',
//     department: 'CORONEL DORREGO',
//     zip: '8158',
//     city: 'APARICIO'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '',
//     city: 'LA VIRGINIA'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7501',
//     city: 'INDIO RICO'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'TEJO (GALERA)'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'PILLAHUINCO'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'CORONEL PRINGLES'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'PERALTA'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'KRABBE'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'LAS MOSTAZAS'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'ZOILO PERALTA'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7530',
//     city: 'RAULET'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7531',
//     city: 'EL DIVISORIO'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7531',
//     city: 'EL PENSAMIENTO'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7531',
//     city: 'LARTIGAU'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7533',
//     city: 'QUIÑIHUAL'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7536',
//     city: 'LA RESERVA'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7536',
//     city: 'RESERVA'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7536',
//     city: 'ESTACION CORONEL PRINGLES'
//   },
//   {
//     code: '196',
//     department: 'CORONEL PRINGLES',
//     zip: '7536',
//     city: 'STEGMAN'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '6071',
//     city: 'SANTA MARIA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '6535',
//     city: 'COLONIA SANTA MARIA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'SAUCE CORTO'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'PIÑEYRO (PDO. CNEL. SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'CORONEL SUAREZ'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'VILLA BELGRANO (CNEL. SUAREZ-PDO. CNEL. SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'CURAMALAL'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'VILLA ARCADIA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7540',
//     city: 'BATHURST'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'PUEBLO SANTA TRINIDAD'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'D ORBIGNY'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'PUEBLO SAN JOSE'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'COLONIA N" 1 (CORONEL SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'COLONIA N" 3 (CORONEL SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'SAN JOSE (PUEBLO SAN JOSE-PDO. CORONEL SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7541',
//     city: 'PUEBLO SANTA MARIA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7543',
//     city: 'LA PRIMAVERA (PDO. CNEL. SUAREZ)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'LA NEVADA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'LOUGE'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'OTOÑO (ESTACION FCGR)'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'HUANGUELEN'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'LA COPETA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'ZENTENA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7545',
//     city: 'OMBU'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7547',
//     city: 'PASMAN'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7547',
//     city: 'CASCADA'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7548',
//     city: 'CURUMALAN'
//   },
//   {
//     code: '203',
//     department: 'CORONEL SUAREZ',
//     zip: '7548',
//     city: 'CURA MALAL'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '2741',
//     city: 'LOS ANGELES'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6616',
//     city: 'CASTILLA'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6616',
//     city: 'LA CALIFORNIA ARGENTINA'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6734',
//     city: 'RAWSON'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6734',
//     city: 'SAN PATRICIO'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6740',
//     city: 'CHACABUCO'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6740',
//     city: 'VILLAFAÑE'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6743',
//     city: 'COLIQUEO'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6743',
//     city: 'INGENIERO SILVEYRA'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6746',
//     city: 'CUCHA CUCHA'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6748',
//     city: 'O HIGGINS'
//   },
//   {
//     code: '210',
//     department: 'CHACABUCO',
//     zip: '6748',
//     city: 'MEMBRILLAR'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LA LARGA NUEVA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'EL VENCE'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'CAMARON CHICO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LAS TORTUGAS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'MONASTERIO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'SAN DANIEL'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LOS CHILCOS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LEZAMA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'EL DESTINO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LA DESPIERTA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'MANUEL J. COBO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LA PIEDRA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7116',
//     city: 'LA ALCIRA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA REFORMA CHASCOMUS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LAS BRUSCAS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'ESTANCIA SAN RAFAEL'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'EL RINCON (CHASCOMUS-PDO. CHASCOMUS)'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'CHASCOMUS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA HORQUETA (PDO. CHASCOMUS)'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA AMISTAD'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA ALAMEDA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'BARRIO EL HUECO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'EL EUCALIPTUS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA AMALIA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA AZOTEA GRANDE'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'VISTA ALEGRE'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LAS MULAS'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LEGARISTI'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'CAMINERA SAMBOROMBON'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'VITEL'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7130',
//     city: 'LA LIMPIA (CHASCOMUS-PDO. CHACOMUS)'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'VERGARA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'CUARTEL 8'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'COMANDANTE GIRIBONE'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'EL CARBON'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'LIBRES DEL SUD'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'DON CIPRIANO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'PEDRO NICOLAS ESCRIBANO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7135',
//     city: 'KILOMETRO 158 (APEADERO FCGR)'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7136',
//     city: 'COLONIA ESCUELA ARGENTINA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7136',
//     city: 'GANDARA'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7136',
//     city: 'CUARTEL 6"'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7136',
//     city: 'HARAS SAN IGNACIO'
//   },
//   {
//     code: '217',
//     department: 'CHASCOMUS',
//     zip: '7136',
//     city: 'ADELA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6620',
//     city: 'HENRY BELL'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6620',
//     city: 'CHIVILCOY'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6620',
//     city: 'PUENTE BATALLA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6620',
//     city: 'BARRIO FLORENCIO VARELA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6623',
//     city: 'SAN SEBASTIAN'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6623',
//     city: 'INDACOCHEA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6623',
//     city: 'LA RICA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6625',
//     city: 'VILLA MOQUEHUA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6625',
//     city: 'CAÑADA LA RICA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6627',
//     city: 'RAMON BIAUS'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6628',
//     city: 'EMILIO AYARZA'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6632',
//     city: 'BENITEZ'
//   },
//   {
//     code: '224',
//     department: 'CHIVILCOY',
//     zip: '6632',
//     city: 'GOROSTIAGA'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6405',
//     city: 'DUHAU'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6417',
//     city: 'CASEY'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'LA LARGA'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'LOS COLONIALES'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'CORONEL MARCELINO FREYRE'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'ANDANT'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'DAIREAUX'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'ALFALAD'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'SALAZAR'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6555',
//     city: 'VILLA CAROLA'
//   },
//   {
//     code: '231',
//     department: 'DAIREAUX',
//     zip: '6557',
//     city: 'ARBOLEDAS'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '',
//     city: 'BARRIO 9  DE JULIO  (DOLORES)'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'DOLORES'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'LA ESTRELLA (DOLORES-PDO. DOLORES)'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'EL SESENTA'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'LOMA DE SALOMON'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'PARRAVICINI'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7100',
//     city: 'BARRIO ESTACION DOLORES'
//   },
//   {
//     code: '238',
//     department: 'DOLORES',
//     zip: '7101',
//     city: 'SEVIGNE'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1925',
//     city: 'GRAND DOCK'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1925',
//     city: 'PUERTO LA PLATA'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1925',
//     city: 'ENSENADA'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1925',
//     city: 'DOCK CENTRAL'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1925',
//     city: 'DESTILERIA FISCAL'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1927',
//     city: 'ESCUELA NAVAL MILITAR RIO SANTIAGO'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1929',
//     city: 'BASE NAVAL RIO SANTIAGO'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1929',
//     city: 'ISLA SANTIAGO'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1929',
//     city: 'ISLA PAULINO'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1931',
//     city: 'PUNTA LARA'
//   },
//   {
//     code: '245',
//     department: 'ENSENADA',
//     zip: '1931',
//     city: 'BALNEARIO PUNTA LARA'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'GARIN'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'BARRIO SANTA TERESA'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'BARRIO KM. 48'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'RUTA 26 KILOMETRO 48'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'RUTA 26 MAQUINISTA FRANCISCO SAVIO'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1619',
//     city: 'BARRIO BELIERA'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1620',
//     city: 'MAQUINISTA FRANCISCO SAVIO'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1623',
//     city: 'INGENIERO MASCHWITZ'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1623',
//     city: 'BARRIO GARIN NORTE'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'PUERTO DE ESCOBAR'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'CAMPOMAR (VIÑEDO)'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'ARROYO CANELON'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'ARROYO LAS ROSAS (ESCOBAR-PDO. ESCOBAR)'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'LOMA VERDE (ESCOBAR-PDO. ESCOBAR)'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'BELEN DE ESCOBAR'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'VILLA LA CHECHELA'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'RINCON DEL CAZADOR'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'VILLA VALLIER'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1625',
//     city: 'ESCOBAR'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1627',
//     city: 'MATHEU'
//   },
//   {
//     code: '252',
//     department: 'ESCOBAR',
//     zip: '1665',
//     city: 'BARRIO SAN LUIS'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1776',
//     city: '9 DE ABRIL'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1802',
//     city: 'COLONIA LOS CHIVATOS'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1802',
//     city: 'BALNEARIO POPULAR'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1802',
//     city: 'COLONIA LA VALENTINA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1802',
//     city: 'BARRIO ESTEBAN ECHEVERRIA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'UNION FERROVIARIA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'RUTA 205 KILOMETRO 32'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'BARRIO SOL DE ORO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'VILLA GOLF'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'VILLA GUILLERMINA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'BARRIO PROGRESO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1804',
//     city: 'BARRIO A.T.E.'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1806',
//     city: 'ESTEBAN ECHEVERRIA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1838',
//     city: 'BARRIO LAS MORERAS'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1838',
//     city: 'BARRIO LOS EUCALIPTUS (LUIS GUILLON-PDO. E. ECHEVERRIA)'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1838',
//     city: 'LUIS GUILLON'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1838',
//     city: 'BARRIO LINDO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1838',
//     city: 'VILLA PARISH ROBERTSON'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO SIGLO XX'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO MONTE CHICO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO LA MORITA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO LANDA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO MONTECARLO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO GRANDE'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO MARTINEZ MORENO'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO VILLA MARIA'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO SANTA ISABEL (MONTE GRANDE-PDO. ESTEBAN ECHEVERRIA)'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'BARRIO NUESTRAS MALVINAS'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842      ',
//     city: 'EL JAGUEL'
//   },
//   {
//     code: '260',
//     department: 'ESTEBAN ECHEVERRIA',
//     zip: '1842',
//     city: 'MONTE GRANDE'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '1617',
//     city: 'BARRIO EL ZORZAL'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'DIEGO GAYNOR'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'ORLANDO (APEADERO FCGU)'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'LA ROSADA'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'ARROYO DE LA CRUZ'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'EXALTACION DE LA CRUZ'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'PAVON'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'CAPILLA DEL SEÑOR'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'CAPILLA'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'LA LATA (APEADERO FCGU)'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2812',
//     city: 'BARRIO EL REMANSO'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '2814',
//     city: 'LOS CARDALES'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '6703',
//     city: 'ALASTUEY (APEADERO FCGU)'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '6703',
//     city: 'RUTA 8 KILOMETRO 77'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '6703',
//     city: 'ETCHEGOYEN'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '6703',
//     city: 'VILLA PRECEPTOR MANUEL CRUZ'
//   },
//   {
//     code: '266',
//     department: 'EXALTACION DE LA CRUZ',
//     zip: '6703',
//     city: 'PARADA ROBLES'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '',
//     city: 'MONTE GRANDE'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1802',
//     city: 'AEROPUERTO EZEIZA'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1802',
//     city: 'AEROPUERTO EZEIZA ESTAFETA N" 1'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1803      ',
//     city: 'BARRIO PARQUE EL TREBOL - LA UNION'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1804',
//     city: 'CANNING'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1804',
//     city: 'BARRIO SAN IGNACIO (EZEIZA-PDO. E. ECHEVERRIA)'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1804',
//     city: 'EZEIZA'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'TRISTAN SUAREZ'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO DEL PLATA'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO ALTOS DE TRISTAN SUAREZ'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO LUJAN'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO LA PORTEÑA (TRISTAN SUAREZ-PDO. ESTEBAN ECHEVERRIA)'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO VISTA ALEGRE (TRISTAN SUAREZ-PDO. ESTEBAN ECHEVERRIA)'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1806',
//     city: 'BARRIO SANTA MARTA (TRISTAN SUAREZ-PDO. ESTEBAN ECHEVERRIA)'
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '1813      ',
//     city: 'CARLOS SPEGAZZINI                                                               '
//   },
//   {
//     code: '270',
//     department: 'EZEIZA',
//     zip: '6065',
//     city: 'BLAQUIER'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'RUTA 2 KILOMETRO 24'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'CAPILLA DE LOS INGLESES'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO 9 DE JULIO (FLORENCIO VARELA-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO SAN NICOLAS'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO VILLA ANGELICA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO RESIDENCIAL SAN EMILIO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA AURORA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA GRAL. SAN MARTIN (FLORENCIO VARELA-PDO. F. VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO LA ESMERALDA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'KILOMETRO 40 (APEADERO FCGB) (FLORENCIO VARELA-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'EL TROPEZON'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA SANTA ROSA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA SUSANA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO MONTEVERDE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA ESTANISLAO S. ZEBALLOS'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'CAMINO GRAL. BELGRANO (KM. 17'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA ARGENTINA (FLORENCIO VARELA-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA VATTEONE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA LOPEZ ROMERO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'FLORENCIO VARELA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO NOBILE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO SAN EDUARDO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO TECHO ROJO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA MARTIN FIERRO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO CINCO ESQUINAS'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO PALERMO CHICO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO SANTO TOMAS'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO CORTEZ'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'LA FABRICA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'EL OMBU'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'GOBERNADOR MONTEVERDE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA BROWN'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'COLONIA LA CAPILLA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO SAN JORGE (FLORENCIO VARELA-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO MONTE CUDINE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA LA DELICIA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO GENERAL BELGRANO (FLORENCIO VARELA-PDO. F. VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA SAN ROQUE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'BARRIO LA SIRENA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'CAMINO CALCHAQUI (KM. 23 AL 24'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA DEL PLATA'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1888',
//     city: 'VILLA SAN LUIS'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'BOSQUES'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'VILLA HUDSON'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'BARRIO LAS MARGARITAS (EL ROCIO-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'RUTA 2 KILOMETRO 28'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'BARRIO EL 36'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'EL ROCIO'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'BARRIO RICARDO ROJAS (EL ROCIO-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'RUTA 2 KILOMETRO 31 AL 31'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1889',
//     city: 'KILOMETRO 36 (EMBARCADERO FCGB) (EL ROCIO-PDO. FLORENCIO VARELA)'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1891',
//     city: 'BARRIO EL PARQUE'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1891',
//     city: 'INGENIERO ALLAN'
//   },
//   {
//     code: '274',
//     department: 'FLORENCIO VARELA',
//     zip: '1891',
//     city: 'BARRIO LA CAROLINA'
//   },
//   {
//     code: '277',
//     department: 'FLORENTINO AMEGHINO',
//     zip: '6064',
//     city: 'BLAQUIER'
//   },
//   {
//     code: '277',
//     department: 'FLORENTINO AMEGHINO',
//     zip: '6064      ',
//     city: 'AMEGHINO'
//   },
//   {
//     code: '277',
//     department: 'FLORENTINO AMEGHINO',
//     zip: '6077',
//     city: 'PORVENIR'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '6707',
//     city: 'PARAJE LA POLOLA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA MADRECITA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA LUCIA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LOS PATOS'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA REFORMA (CMTE. NICANOR OTAMENDI-PDO. GRAL. ALVARADO)'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'SAN FELIPE'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LAS LOMAS'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'DIONISIA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA BALLENERA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'SAN CORNELIO'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'COMANDANTE NICANOR OTAMENDI'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA COLMENA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7603',
//     city: 'LA ELMA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7605',
//     city: 'LAS PIEDRITAS (MECHONGUE-PDO. GRAL. ALVARADO)'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7605',
//     city: 'YRAIZOZ'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7605',
//     city: 'MECHONGUE'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'VILLA COPACABANA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'EL CENTINELA'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'EL PITO (MIRAMAR-PDO. GRAL. ALVARADO)'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'PLA Y ROGNONI'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'SANTA IRENE'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'BARRIO OESTE'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'MAR DEL SUD'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'GENERAL ALVARADO'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'MIRAMAR (PDO. GRAL. ALVARADO)'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'BARRIO PARQUE BRISTOL'
//   },
//   {
//     code: '280',
//     department: 'GENERAL ALVARADO',
//     zip: '7607',
//     city: 'MAR DEL SUR'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7207',
//     city: 'ESTRUGAMOU'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'EMMA'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'EL CHUMBIAO'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'HARAS R. DE LA PARVA'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'GENERAL ALVEAR'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'JOSE MARIA MICHEO'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'LA PAMPA'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'EL PARCHE'
//   },
//   {
//     code: '287',
//     department: 'GENERAL ALVEAR',
//     zip: '7263',
//     city: 'LOS CUATRO CAMINOS'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'LA ANGELITA'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'FERRE'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'LA TRINIDAD'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'ASCENSION'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'ESCUELA AGRICOLA SALESIANA (C. G. UNZUE)'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6003',
//     city: 'ESTACION ASCENSION'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6005',
//     city: 'HAM'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6005',
//     city: 'ARENALES'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6005',
//     city: 'LA HUAYQUERIA'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6005',
//     city: 'ESTACION GENERAL ARENALES'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6005',
//     city: 'GENERAL ARENALES'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6007',
//     city: 'LA PINTA'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6007',
//     city: 'DELGADO'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6007',
//     city: 'COLONIA LOS HORNOS'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6007',
//     city: 'ARRIBEÑOS'
//   },
//   {
//     code: '294',
//     department: 'GENERAL ARENALES',
//     zip: '6009',
//     city: 'TEODELINA'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'LA ESPERANZA (GRAL. BELGRANO-PDO. GRAL. BELGRANO)'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'GENERAL BELGRANO'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'LA VERDE (GRAL. BELGRANO-PDO. GRAL. BELGRANO)'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'BONNEMENT (APEADERO FCGR)'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'HARAS CHACABUCO'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'IBAÑEZ'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'EL SIASGO'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'NEWTON'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7223',
//     city: 'LA CHUMBEADA (PDO. GRAL. BELGRANO)'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7225',
//     city: 'CASALINS'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7225',
//     city: 'PUENTE EL OCHENTA'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7225',
//     city: 'ESTANCIA VIEJA'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7225',
//     city: 'RINCON DE VIVOT'
//   },
//   {
//     code: '301',
//     department: 'GENERAL BELGRANO',
//     zip: '7225',
//     city: 'REAL AUDIENCIA'
//   },
//   {
//     code: '308',
//     department: 'GENARAL GUIDO',
//     zip: '7116',
//     city: 'ATILIO PESSAGNO'
//   },
//   {
//     code: '308',
//     department: 'GENARAL GUIDO',
//     zip: '7118',
//     city: 'GENERAL GUIDO'
//   },
//   {
//     code: '308',
//     department: 'GENARAL GUIDO',
//     zip: '7161',
//     city: 'LABARDEN'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'INVERNADAS'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'EL CHAJA'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'TIO DOMINGO'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'PASOS'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'CLAVERIE'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'ISONDU'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'MACEDO'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'ESPADAÑA'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'GOBOS'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'GOÑI'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'GENERAL MADARIAGA'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'LA ESPERANZA (GRAL. MADARIAGA-PDO. GRAL. J. MADARIAGA)'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'BARRIO SAN MARTIN (PDO. GENERAL MADARIAGA)'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'SPERONI'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'MEDALAND'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'GOROSO'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'SALADA GRANDE'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'SALADA CHICA'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'SANTA TERESA (GRAL. MADARIAGA-PDO. GRAL. LAVALLE)'
//   },
//   {
//     code: '315',
//     department: 'GENERAL JUAN MADARIAGA',
//     zip: '7163',
//     city: 'HINOJALES'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7406      ',
//     city: 'GENERAL LAMADRID'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7406',
//     city: 'SANTA CLEMENTINA'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7406',
//     city: 'LAS MARTINETAS'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7406',
//     city: 'GENERAL LA MADRID'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7407',
//     city: 'LIBANO'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7408',
//     city: 'LA COLINA'
//   },
//   {
//     code: '322',
//     department: 'GENERAL LAMADRID',
//     zip: '7535',
//     city: 'PONTAUT'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1731',
//     city: 'VILLARS'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1735',
//     city: 'EL DURAZNO'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1737',
//     city: 'LA CHOZA'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1737',
//     city: 'KILOMETRO 77 (LA CHOZA-PDO. GRAL. LAS HERAS)'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1739',
//     city: 'PARADA KILOMETRO 76'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1739',
//     city: 'HORNOS'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'LOZANO'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'PLOMER'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'GENERAL HORNOS'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'KILOMETRO 79 (APEADERO FCGB)'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'GENERAL LAS HERAS'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'SPERATTI'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'ENRIQUE FYNN'
//   },
//   {
//     code: '329',
//     department: 'GENERAL LAS HERAS',
//     zip: '1741',
//     city: 'LAS HERAS'
//   },
//   {
//     code: '336',
//     department: 'GENERAL LAVALLE',
//     zip: '7103',
//     city: 'GENERAL LAVALLE'
//   },
//   {
//     code: '336',
//     department: 'GENERAL LAVALLE',
//     zip: '7103',
//     city: 'FARO SAN ANTONIO'
//   },
//   {
//     code: '336',
//     department: 'GENERAL LAVALLE',
//     zip: '7119',
//     city: 'LA MASCOTA (SANTO DOMINGO-PDO. GRAL. LAVALLE)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'KILOMETRO 55 (APEADERO FCGB)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'KILOMETRO 58 (APEADERO FCGB)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'KILOMETRO 77 (APEADERO FCGB) (LOMA VERDE-PDO. GRAL. PAZ)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'LOS MARINO'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'LOMA VERDE (PDO. GRAL. PAZ)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'KILOMETRO 70 (APEADERO FCGB)'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1981',
//     city: 'GOBERNADOR OBLIGADO'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1987',
//     city: 'GENERAL PAZ'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1987',
//     city: 'CANCHA DEL POLLO'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1987',
//     city: 'ALEGRE'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1987',
//     city: 'CUARTEL 11"'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '1987',
//     city: 'RANCHOS'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '7223',
//     city: 'CHAS'
//   },
//   {
//     code: '343',
//     department: 'GENERAL PAZ',
//     zip: '7225',
//     city: 'VILLANUEVA'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6042',
//     city: 'DOS HERMANOS'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6042',
//     city: 'IRIARTE'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6050',
//     city: 'DUSSAUD'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6050',
//     city: 'HARAS EL 14'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6050',
//     city: 'GENERAL PINTO'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6050',
//     city: 'COLONIA SAN RICARDO'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6050',
//     city: 'VILLA ROTH'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6051',
//     city: 'INGENIERO BALBIN'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6053',
//     city: 'EL PEREGRINO'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6053',
//     city: 'MAYOR JOSE ORELLANO'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6053',
//     city: 'GERMANIA'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6053',
//     city: 'GUNTHER'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6058',
//     city: 'PAZOS KANKI'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6058',
//     city: 'VILLA FRANCIA (CNEL. GRANADA-PDO. GRAL. PINTO)'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6062',
//     city: 'LOS CALLEJONES (ESTACION FCGM)'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6062',
//     city: 'CORONEL GRANADA'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6064',
//     city: 'HALCEY'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6064',
//     city: 'SALALE'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6064',
//     city: 'EDUARDO COSTA'
//   },
//   {
//     code: '351',
//     department: 'GENERAL PINTO',
//     zip: '6077',
//     city: 'NUEVA SUIZA (ESTACION FCGM)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '1665',
//     city: 'BARRIO SANTA PAULA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO JURAMENTO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO PINARES'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO BOSQUE ALEGRE'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO GASTRONOMICO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO SAN CAYETANO (MAR DEL PLATA-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO JUAN GREGORIO DE LAS HERAS'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO LOS ANDES'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'MAR DEL PLATA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO JOSE MANUEL ESTRADA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO GENERAL ROCA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO SAN JOSE (MAR DEL PLATA-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO EL GAUCHO (MAR DEL PLATA-PDO. GENERAL PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BASE NAVAL MAR DEL PLATA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO TIRO FEDERAL (MAR DEL PLATA-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO CONSTITUCION'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'PUEBLO PERALTA RAMOS OESTE'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO ALFAR'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'EL SOLDADO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO FARO NORTE'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO TIERRA DE ORO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO PRIMERA JUNTA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO FLORENTINO AMEGHINO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO PARQUE LA FLORIDA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'LAGUNA DEL SOLDADO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO PARQUE CAMET'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO DON BOSCO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO 9 DE JULIO (MAR DEL PLATA-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO SAN JUAN (MAR DEL PLATA-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'LAGUNA DE PONCE'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'VALLE HERMOSO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'CANTERA DE RIZZO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'PARQUE PALERMO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'ANTARTIDA ARGENTINA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'PARAJE EL DORADO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO PARQUE LURO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'BARRIO EMIR RAMON JUAREZ'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7600',
//     city: 'EL MARTILLO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'EL COYUNCO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'SAN JOSE DE OTAMENDI'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'LA PEREGRINA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'LAGUNA DE LOS PADRES'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'EL BOQUERON'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'LOS ORTIZ'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'BATAN'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'BARRIO SAN CARLOS (LA PEREGRINA-PDO. GRAL PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7601',
//     city: 'SIERRA DE LOS PADRES'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7605',
//     city: 'CHAPADMALAL'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7605',
//     city: 'HARAS CHAPADMALAL'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7605',
//     city: 'ESTACION CHAPADMALAL'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7605',
//     city: 'EL MARQUESADO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7605',
//     city: 'SANTA ISABEL (CHAPADMALAL-PDO. GRAL. PUEYRREDON)'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'COLONIA DE VACACIONES CHAPADMALAL'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'LOS ACANTILADOS'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'UNIDAD TURISTICA MIRAMAR'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'PLAYA CHAPADMALAL'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'PLAYA SERENA'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7609',
//     city: 'SIEMPRE VERDE'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7612',
//     city: 'EL REFUGIO'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7612',
//     city: 'CAMET'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7613',
//     city: 'SAN VALENTIN'
//   },
//   {
//     code: '357',
//     department: 'GENERAL PUEYRREDON',
//     zip: '7613',
//     city: 'CAMPAMENTO'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'HOSPITAL VICENTE LOPEZ Y PLANES'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'PUEBLO NUEVO (GRAL. RODRIGUEZ-PDO. GRAL. RODRIGUEZ)'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'EL GRANADERO'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'LA FRATERNIDAD'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'GENERAL RODRIGUEZ'
//   },
//   {
//     code: '364',
//     department: 'GENERAL RODRIGUEZ',
//     zip: '1748',
//     city: 'LAS MALVINAS (PARADA FCDFS)'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1617',
//     city: 'PARQUE SAN LORENZO'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'SAN MARTIN'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'BARRIO PARA JEFES Y OFICIALES GENERAL SAN MARTIN'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'VILLA BILLINGHURST'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'MIGUELETE (PARADA FCGM)'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'VILLA MAIPU'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1650',
//     city: 'CIUDAD DEL LIBERTADOR GRAL. SAN MARTIN'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1651',
//     city: 'VILLA CONCEPCION'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1651',
//     city: 'SAN ANDRES'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1651',
//     city: 'VILLA SAN ANDRES'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1651',
//     city: 'VILLA ZAGALA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1651',
//     city: 'BARRIO SAN IGNACIO DE LOYOLA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1653      ',
//     city: 'CHILAVERT'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1653',
//     city: 'VILLA BALLESTER'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1655',
//     city: 'JOSE LEON SUAREZ'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1655',
//     city: 'BARRIO LIBERTADOR'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1655',
//     city: 'VILLA JOSE LEON SUAREZ'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1655',
//     city: 'VILLA HIDALGO'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1655',
//     city: 'VILLA LANZONI'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'VILLA 11 DE SEPTIEMBRE'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'RUTA 8 KILOMETRO 19'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'VILLA CIUDAD JARDIN EL LIBERTADOR'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'VILLA MARIA DE LOS REMEDIOS DE ESCALADA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'BARRIO CHURRUCA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'BARRIO VILLA MARIA DE LOS REMEDIOS DE ESCALADA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'UNION TRANVIARIOS'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'BARRIO MARTIN FIERRO (VILLA LOMA HERMOSA-PDO. SAN MARTIN)'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1657',
//     city: 'VILLA LOMA HERMOSA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1672',
//     city: 'VILLA LYNCH (PDO. GRAL. SAN MARTIN)'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1672',
//     city: 'CORONEL FRANCISCO LYNCH'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1672',
//     city: 'VILLA BONICH'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1676',
//     city: 'VILLA SANTOS LUGARES'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1676',
//     city: 'CUADRILLA 1011 (FGCSM. SUBDIVISION ALIANZA)'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1676',
//     city: 'SANTOS LUGARES'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1676',
//     city: 'VILLA TALLERES ALIANZA'
//   },
//   {
//     code: '371',
//     department: 'GENERAL SAN MARTIN',
//     zip: '1826',
//     city: 'REMEDIOS DE ESCALADA'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6013',
//     city: 'BAIGORRITA'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6015',
//     city: 'GENERAL VIAMONTE'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6015',
//     city: 'LOS TOLDOS'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6015',
//     city: 'LOS HUESOS'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6015',
//     city: 'CAMPO LA TRIBU'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6015',
//     city: 'CAMPO COLIQUEO'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'KILOMETRO 282 (APEADERO FCDFS)'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'SAN EMILIO (PDO. GRAL. VIAMONTE)'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'COLONIA SAN FRANCISCO (SAN EMILIO-PDO. GRAL. VIAMONTE)'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'LA DELFINA'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'EL RETIRO (SAN EMILIO-PDO. GRAL. VIAMONTE)'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'CHANCAY'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6017',
//     city: 'SAN ROQUE'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6018',
//     city: 'LOS BOSQUES'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6018',
//     city: 'COLONIA LOS HUESOS'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6018',
//     city: 'QUIRNO COSTA'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6018',
//     city: 'COLONIA LOS BOSQUES'
//   },
//   {
//     code: '385',
//     department: 'GENERAL VIAMONTE',
//     zip: '6018',
//     city: 'ZAVALIA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6030',
//     city: 'COLONIA CASAL'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6051',
//     city: 'PICHINCHA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6064',
//     city: 'VOLTA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6101',
//     city: 'VILLA SABOYA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6105',
//     city: 'CAÑADA SECA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6105',
//     city: 'SANTA REGINA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6223',
//     city: 'CORONEL CHARLONE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6223',
//     city: 'FERNANDO MARTI'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6230',
//     city: 'DRABBLE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6230',
//     city: 'LOS LAURELES (ESTACION FCGB)'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6230',
//     city: 'GENERAL VILLEGAS'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6230',
//     city: 'BASAVILBASO'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6230',
//     city: 'MOORE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6231',
//     city: 'PRADERE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6235',
//     city: 'VILLA SAUZE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6241',
//     city: 'SANTA ELEODORA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6241',
//     city: 'ELDIA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6241',
//     city: 'EMILIO V. BUNGE'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6241',
//     city: 'PIEDRITAS'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6241',
//     city: 'GONDRA'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6242',
//     city: 'ELORDI'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6242',
//     city: 'LOS CALDENES'
//   },
//   {
//     code: '392',
//     department: 'GENERAL VILLEGAS',
//     zip: '6244',
//     city: 'BANDERALO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6411',
//     city: 'PAPIN'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6411',
//     city: 'BRAVO DEL DOS'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6411',
//     city: 'VICTORINO DE LA PLAZA'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6411',
//     city: 'GARRE'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6417',
//     city: 'CASBAS'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6417',
//     city: 'FORTIN PAUNERO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6417',
//     city: 'SAN FERMIN'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6417',
//     city: 'SATURNO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6430',
//     city: 'FATRALO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6433',
//     city: 'ARTURO VATTEONE'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6435',
//     city: 'ALAMOS'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6435',
//     city: 'VUELTA DE ZAPATA'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6435',
//     city: 'LAGUNA DEL MONTE'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6435',
//     city: 'EL NILO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6435',
//     city: 'GUAMINI'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'LA GREGORIA'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'LAS TRES FLORES'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'LA HERMINIA'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'EL TREBAÑON'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'ARROYO EL CHINGOLO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'LAS CUATRO HERMANAS'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'SANTA RITA (ALAMOS-PDO. GUAMINI)'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6437',
//     city: 'COLONIA SAN RAMON'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6439',
//     city: 'MASUREL'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6439',
//     city: 'LA MANUELA'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6439',
//     city: 'BONIFACIO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6439',
//     city: 'LURO'
//   },
//   {
//     code: '399',
//     department: 'GUAMINI',
//     zip: '6439',
//     city: 'LAGUNA ALSINA'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6465',
//     city: 'HENDERSON'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6465',
//     city: 'CORACEROS'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6465',
//     city: 'MARIA LUCILA'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6467',
//     city: 'KILOMETRO 393 (APEADERO FCDFS)'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6467',
//     city: 'ENRIQUE LAVALLE'
//   },
//   {
//     code: '406',
//     department: 'HIPOLITO YRIGOYEN',
//     zip: '6557',
//     city: 'HERRERA VEGAS'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '',
//     city: 'VILLA TESEI'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'BARRIO JHONSON'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'BARRIO PARADA GALLO'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'BARRIO EL DESTINO'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'RUBEN DARIO (ESTACION FCGU)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'EJERCITO DE LOS ANDES (PARADA FCGU)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'BARRIO MARIANO MORENO (HURLINGHAM-PDO. MORON)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'BARRIO PARQUE QUIRNO'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'JORGE NEWBERY (PARADA FCGU)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'HURLINGHAM'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'WILLIAMS C. MORRIS (PARADA FCGSM)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1686',
//     city: 'JUAN BAUTISTA DE LA SALLE (PARADA FCGU)'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1688',
//     city: 'TESEI'
//   },
//   {
//     code: '408',
//     department: 'HURLINGHAM',
//     zip: '1688',
//     city: 'SANTOS TESEI'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1713',
//     city: 'BARRIO PUENTE ROCA'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1713',
//     city: 'PARQUE LELOIR'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1713',
//     city: 'BARRIO VILLA HARAS MYRIAM'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1713',
//     city: 'PARQUE SUMAMPA'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1713',
//     city: 'VILLA GOBERNADOR UDAONDO'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'BARRIO ALFREDO L. PALACIOS'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'VILLA IRUPE'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'VILLA GRAND BOURG'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'BARRIO VILLA ALBERDI'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'VILLA LEON'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'VILLA DE LAS NACIONES'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'ITUZAINGO'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'BARRIO PINTEMAR'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'BARRIO AERONAUTICO'
//   },
//   {
//     code: '410',
//     department: 'ITUZAINGO',
//     zip: '1714',
//     city: 'BARRIO MARINA'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'JOSE C. PAZ'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO ALTOS DE JOSE C. PAZ'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO ANTARTIDA ARGENTINA'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO LAS ACACIAS (JOSE C. PAZ-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO SAN ROQUE (JOSE C. PAZ-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO FRINO'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO PARQUE EL OMBU'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO ARGITAL'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'PIÑERO (ESTACION FCGU)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'ROOSEVELT (JOSE C. PAZ-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO VUCETICH'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO IRIGOIN'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO LAS HERAS'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO 9 DE JULIO (JOSE C. PAZ-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO VILLA ALTUBE'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'VILLA BARRIO ALTUBE'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1665',
//     city: 'BARRIO PARQUE SAN MIGUEL'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'VILLA DEL CARMEN (DEL VISO-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'BARRIO PARQUE PERO'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'RUTA 8 KILOMETRO 41'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'LA LOMA (DEL VISO-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'BARRIO PINAZO'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'BARRIO LOS CACHORROS'
//   },
//   {
//     code: '412',
//     department: 'JOSÉ C. PAZ',
//     zip: '1669',
//     city: 'RUTA 8 KILOMETRO 47'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA MAYOR'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'PUEBLO NUEVO (JUNIN-PDO. JUNIN)'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'PARAJE LA AGRARIA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA TRIANGULO'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'BARRIO CAROSIO'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA PENOTTI'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA ORTEGA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'BARRIO VILLA ORTEGA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA YORK'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'BARRIO U.O.C.R.A.'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'JUNIN'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA TALLERES'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'BARRIO GENERAL SAN MARTIN'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6000',
//     city: 'VILLA BELGRANO (JUNIN-PDO. JUNIN)'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6001',
//     city: 'LAGUNA DE GOMEZ'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6001',
//     city: 'FORTIN TIBURCIO'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6001',
//     city: 'AGUSTINA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6001',
//     city: 'AGUSTIN ROCA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6013',
//     city: 'MORSE'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6013',
//     city: 'LAPLACETTE'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6022',
//     city: 'LAS PARVAS'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6022',
//     city: 'LA ORIENTAL'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6022',
//     city: 'SAFORCADA'
//   },
//   {
//     code: '413',
//     department: 'JUNIN',
//     zip: '6032',
//     city: 'BLANDENGUES'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7105',
//     city: 'AUTOCAMPING SAN CLEMENTE'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7105',
//     city: 'SAN CLEMENTE DEL TUYU'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7106',
//     city: 'LAS TONINAS'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7107',
//     city: 'SANTA TERESITA'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7108',
//     city: 'MAR DEL TUYU'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'LA VICTORIA (MAR DE AJO-PDO. DE LA COSTA)'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'SAN JOSE DE LOS QUINTEROS'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'MAR DE AJO'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'BARRIO VILLA CLELIA'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'PLAYA LAS MARGARITAS'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'BARRIO PEDRO J. ROCCO'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'BARRIO MAR DE AJO NORTE'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7109',
//     city: 'PUNTA MEDANOS'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7111',
//     city: 'SAN BERNARDO (PDO. DE LA COSTA)'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7111',
//     city: 'SAN BERNARDO DEL TUYU'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7111',
//     city: 'PLAYA SAN BERNARDO'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7112',
//     city: 'AGUAS VERDES'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7112',
//     city: 'COSTA AZUL'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7112',
//     city: 'BALNEARIO AGUAS VERDES'
//   },
//   {
//     code: '420',
//     department: 'LA COSTA',
//     zip: '7113',
//     city: 'LA LUCILA DEL MAR'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1704',
//     city: 'VILLA DON BOSCO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1704',
//     city: 'RAMOS MEJIA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1752',
//     city: 'LOMAS DEL MIRADOR'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1752',
//     city: 'VILLA INSUPERABLE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1752',
//     city: 'VILLA REBASA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1754      ',
//     city: 'LA MATANZA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1754',
//     city: 'SAN JUSTO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1754',
//     city: 'VILLA LUZURIAGA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1755',
//     city: 'LA CALABRIA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1755',
//     city: 'EL PINAR'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1755',
//     city: 'LA ROSA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1755',
//     city: 'RAFAEL CASTILLO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1757',
//     city: 'BARRIO ALTOS DE LAFERRERE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1757',
//     city: 'BARRIO SAN PEDRO (LAFERRERE-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1757',
//     city: 'BARRIO JORGE NEWBERY (G. LAFERRERE-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1757',
//     city: 'LAFERRERE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1757',
//     city: 'VILLA UNION'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'RUTA 3 KILOMETRO 29'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'LA LOMA (GONZALEZ CATAN-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO VILLA CARMEN'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'ESCUELA AGRICOLA SANTO TOMAS DE AQUINO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO INDEPENDENCIA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'VILLA SANTINA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO LAS NIEVES'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO PITALUGA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'LOMAS DE GARONE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO CALDERON DE LA BARCA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'VILLA DORREGO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO SANTA MARIA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO LA ENCARNACION'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'RUTA 3 KILOMETRO 27 AL 29'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'GONZALEZ CATAN'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO EL MOJON'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO EL DORADO (GONZALEZ CATAN-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO LA JUSTINA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'VILLA SCASSO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO SAN ENRIQUE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'EL PROGRESO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'BARRIO NAHUEL'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1759',
//     city: 'RUTA 3 KILOMETRO 29'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1761',
//     city: '20 DE JUNIO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'MERCEDES BENZ'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO LA RECOLETA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO SANTA AMELIA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO LA MERCEDES'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO SAN IGNACIO (VIRREY DEL PINO-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO EL SOL (PUENTE EZCURRA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO SAN PEDRO (PUENTE EZCURRA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'RUTA 3 KILOMETRO 33 AL 38'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'PARQUE SAN MARTIN (VIRREY DEL PINO-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO SOFIA BOZAN'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO LA ELVIRA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO ORO VERDE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'COLONIA PONTEVEDRA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO COLONIA SAN LORENZO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO LA FORESTA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO SAN MARIANO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'PUENTE EZCURRA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'COLONIA LAS MERCEDES'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'RUTA 3 KILOMETRO 38'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'VIRREY DEL PINO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO ESPERANZA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO LELOIR DE QUIROGA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1763',
//     city: 'BARRIO IGNACIO ARIETA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO EL MANZANAR'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'ISIDRO CASANOVA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO SAN JOSE (ISIDRO CASANOVA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO MARCONI'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'VILLA SAN ALBERTO (ISIDRO CASANOVA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO SAN CAYETANO (ISIDRO CASANOVA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO LOS CEDROS'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO SAN CARLOS (ISIDRO CASANOVA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO LA UNION'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO EL ATALAYA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO LA FRAGATA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO SAN JUAN (ISIDRO CASANOVA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1765',
//     city: 'BARRIO SAN MIGUEL'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1766',
//     city: 'BARRIO ALMAFUERTE (TABLADA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1766      ',
//     city: 'TABLADA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1768',
//     city: 'VILLA MADERO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1770',
//     city: 'TAPIALES'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1770',
//     city: 'ALDO BONZI'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1771',
//     city: 'MERCADO CENTRAL'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'VILLA CELINA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO GENERAL JOSE M. PAZ'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO PRESIDENTE URQUIZA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO PRESIDENTE SARMIENTO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO VICENTE LOPEZ Y PLANES'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO SATELITE'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1772',
//     city: 'BARRIO LAS ACHIRAS'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1773',
//     city: 'VILLA RIACHUELO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1773',
//     city: 'VILLA MADRID'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1773',
//     city: 'VILLA URBANA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1776',
//     city: 'VILLA TRANSRADIO'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1776',
//     city: 'BARRIO SAN SEBASTIAN'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1778',
//     city: 'JOSE INGENIEROS (ESTACION FCGB) (CIUDAD EVITA-PDO. LA MATANZA)'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1778',
//     city: 'QUERANDI'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1778',
//     city: 'CIUDAD EVITA'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1778',
//     city: 'BARRIO JOSE INGENIEROS'
//   },
//   {
//     code: '427',
//     department: 'LA MATANZA',
//     zip: '1778',
//     city: 'JUSTO VILLEGAS (PARADA FCGB)'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '0',
//     city: 'LANUS OESTE'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'CARAZA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'VALENTIN ALSINA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'VILLA CARAZA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'VILLA JARDIN'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'VILLA ILASA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1822',
//     city: 'BARRIO MARIANO MORENO (VALENTIN ALSINAPDO. LANUS)'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1824',
//     city: 'GERLI (PARTIDO LANUS)'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1824',
//     city: 'LANUS'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1824',
//     city: 'REMEDIOS DE ESCALADA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1824',
//     city: 'VILLA INDUSTRIALES'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1825',
//     city: 'LANUS ESTE'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1825',
//     city: 'BARRIO VEINTISEIS DE ABRIL'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1825',
//     city: 'A. A. FERNANDEZ'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1825',
//     city: 'BARRIO VILLA OFELIA'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1825',
//     city: 'MONTE CHINGOLO'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1826',
//     city: 'VILLA POMPEO'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1826',
//     city: 'VILLA EDEN ARGENTINO'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1826',
//     city: 'BARRIO VILLA GENERAL BALCARCE'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1826',
//     city: 'LAS COLONIAS'
//   },
//   {
//     code: '434',
//     department: 'LANUS',
//     zip: '1826',
//     city: 'VILLA CABRAL'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '',
//     city: 'TOLOSA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '0',
//     city: 'COLONIA URQUIZA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1601',
//     city: 'ISLA MARTIN GARCIA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1828',
//     city: 'VILLA ELVIRA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1849',
//     city: 'BARRIO LAS MALVINAS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1894',
//     city: 'EL PELIGRO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1894',
//     city: 'DOCTOR RICARDO LEVENE'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1894',
//     city: 'BARRIO LA PERLA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1894',
//     city: 'VILLA ELISA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1895',
//     city: 'LOS EUCALIPTOS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1895',
//     city: 'ARTURO SEGUI'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'JOAQUIN GORINA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'ENRIQUE BELL'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'CITY BELL'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'CAMINO CENTENARIO KM. 11'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'RECREO VENECIA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1896',
//     city: 'LAS BANDERITAS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1897',
//     city: 'MANUEL B. GONNET'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1900',
//     city: 'SARRAT (PARADA)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1900',
//     city: 'LA PLATA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1900',
//     city: 'CIRCUNVALACION'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1900',
//     city: 'LOS HORNOS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'ANGEL ETCHEVERRY'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'INGENIERO RODOLFO MORENO (APEAD. FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'RUTA 2 KILOMETRO 56 AL 64'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'LA JOSEFA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'LA GRANJA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'ADOLFO F. ORMA (APEADERO FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'ESQUINA NEGRA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'DALMIRO SAENZ (APEADERO FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'LISANDRO OLMOS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'INGENIERO ANDRES VILLANUEVA ( APEADERO FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'RINGUELET'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'GOBERNADOR LUIS GARCIA (APEADERO FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'GOBERNADOR EDUARDO ARANA (APEADERO FCGB)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'LAS QUINTAS (PDO. LA PLATA)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1901',
//     city: 'EL RETIRO-LA PLATA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'INSTITUTO AGUSTIN R. GAMBIER'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'PARAJE EL PELIGRO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'KILOMETRO 66 (APEADERO FCGR)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'PARAJE 19 DE NOVIEMBRE'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'SAN PONCIANO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'RUTA 2 KILOMETRO 46 AL 55'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'JOSE HERNANDEZ'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'ABASTO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'MELCHOR ROMERO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'BUCHANAN'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1903',
//     city: 'LAS CHACRAS (MELCHOR ROMERO-PDO. LA PLATA)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1905',
//     city: 'POBLET'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1905',
//     city: 'KILOMETRO 82 (APEADERO FCGR) (POBLET-PDO. LA PLATA)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'VILLA GARIBALDI'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'LA NUEVA HERMOSURA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'NUEVA HERMOSURA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'EL CARMEN (PDO. LA PLATA)'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'RUTA 11 KILOMETRO 23'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'EL PESCADO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1907',
//     city: 'EL PINO'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1909',
//     city: 'ARANA'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '1909',
//     city: 'IGNACIO CORREAS'
//   },
//   {
//     code: '441',
//     department: 'LA PLATA',
//     zip: '2741',
//     city: 'BARRIO EL RETIRO'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7404',
//     city: 'FORTIN LAVALLE'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7404',
//     city: 'SAN JORGE'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7406',
//     city: 'CHALA QUILCA'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7406',
//     city: 'ALDECON'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7412',
//     city: 'VOLUNTAD'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7412',
//     city: 'PARAGUIL'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7414',
//     city: 'LAS HERMANAS'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7414',
//     city: 'SANTA ELENA (PDO. LAPRIDA)'
//   },
//   {
//     code: '448',
//     department: 'LAPRIDA',
//     zip: '7414',
//     city: 'LAPRIDA'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7200',
//     city: 'LAS FLORES'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7200',
//     city: 'CORONEL BOERR'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7200',
//     city: 'EL GUALICHO'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7201',
//     city: 'MIRANDA'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7201',
//     city: 'PLAZA MONTERO'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7201',
//     city: 'MARTIN COLMAN'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7201',
//     city: 'COLMAN'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7203',
//     city: 'CHAPALEUFU'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7205',
//     city: 'LA ESPERANZA (ROSAS-PDO. LAS FLORES)'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7205',
//     city: 'ROSAS'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7207',
//     city: 'LA PORTEÑA (EL TRIGO-PDO. LAS FLORES)'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7207',
//     city: 'EL TRIGO'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7208',
//     city: 'VILELA'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7212',
//     city: 'PARDO'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7212',
//     city: 'DOCTOR DOMINGO HAROSTEGUY'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7212',
//     city: 'LA ISABEL'
//   },
//   {
//     code: '455',
//     department: 'LAS FLORES',
//     zip: '7212',
//     city: 'SANTA ROSA DE MINELLONO'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6030',
//     city: 'SAUZALES'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6030',
//     city: 'VEDIA'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6030',
//     city: 'EDMUNDO B. PERKINS (ESTACION FCGSM)'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6031',
//     city: 'DE BRUYN'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6031',
//     city: 'KILOMETRO 95 (DESVIO EL CHINGOLO-PDO. GRAL. ARENALES)'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6031',
//     city: 'FORTIN ACHA'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6031',
//     city: 'EL DORADO'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6031',
//     city: 'DESVIO EL CHINGOLO'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6032',
//     city: 'LEANDRO N. ALEM'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6034',
//     city: 'JUAN BAUTISTA ALBERDI'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6034',
//     city: 'COLONIA ALBERDI'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6034',
//     city: 'ALBERDI'
//   },
//   {
//     code: '462',
//     department: 'LEANDRO N. ALEM',
//     zip: '6053',
//     city: 'TRIGALES'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6070',
//     city: 'BALSA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6070',
//     city: 'LINCOLN'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6070',
//     city: 'ESTACION LINCOLN'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6070',
//     city: 'KILOMETRO 321 (APEADERO FCDFS)'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6070',
//     city: 'BARRIO VILLA SESQUICENTENARIO'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6071',
//     city: 'TRIUNVIRATO'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6071',
//     city: 'BERMUDEZ'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6073',
//     city: 'FORTIN VIGILANCIA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6073',
//     city: 'EL TRIUNFO'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6075',
//     city: 'ARENAZA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6075',
//     city: 'KILOMETRO 356 (APEADERO FCDFS)'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6075',
//     city: 'ROBERTS'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6075',
//     city: 'LOS ALTOS'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6077',
//     city: 'PASTEUR'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6077',
//     city: 'LA ZARATEÑA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6078',
//     city: 'BAYAUCA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6453',
//     city: 'LA PRADERA'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6453',
//     city: 'CARLOS SALAS'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6453',
//     city: 'LAS TOSCAS'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6533',
//     city: 'KILOMETRO 322 (APEADERO FCDFS)'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6533',
//     city: 'CORONEL MARTINEZ DE HOZ'
//   },
//   {
//     code: '469',
//     department: 'LINCOLN',
//     zip: '6533',
//     city: 'MARTINEZ DE HOZ'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'DOS NACIONES'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'LICENCIADO MATIENZO'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'LA AZOTEA'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'LA PALMA'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'FULTON'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'CAMINERA NAPALEOFU'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'SAN PASCUAL'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'EL CHEIQUE'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'SAN MANUEL'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'EL HERVIDERO'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7007',
//     city: 'LAS SUIZAS'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7623',
//     city: 'LAS NUTRIAS'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7633',
//     city: 'PIERES'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7633',
//     city: 'MAORI'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7633',
//     city: 'TAMANGUEYU'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'EL MORO'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'LOBERIA'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'LOS CERROS'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'KILOMETRO 440'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'EL LENGUARAZ'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'ARENAS VERDES'
//   },
//   {
//     code: '476',
//     department: 'LOBERIA',
//     zip: '7635',
//     city: 'LAS TOSCAS'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '',
//     city: 'VILLA LOGUERCIO'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '1815',
//     city: 'KILOMETRO 88 (APEADERO FCGR) (URIBELARREA-PDO. LOBOS)'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7240',
//     city: 'KILOMETRO 112 (APEADERO FCGR)'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7240',
//     city: 'LOBOS'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7240',
//     city: 'LAGUNA DE LOBOS'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7241',
//     city: 'LAS CHACRAS (PDO. LOBOS)'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7241',
//     city: 'SALVADOR MARIA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7241',
//     city: 'LA PORTEÑA (PDO. LOBOS)'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'ANTONIO CARBONI'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'ELVIRA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'JOSE SANTOS AREVALO'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'LA BLANQUEADA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'SANTA FELISA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'SANTA ALICIA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7243',
//     city: 'LA ADELAIDA'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7249',
//     city: 'EMPALME LOBOS'
//   },
//   {
//     code: '483',
//     department: 'LOBOS',
//     zip: '7249',
//     city: 'ZAPIOLA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1774',
//     city: 'LA SALADA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'VILLA BENQUEZ'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'BARRIO VILLA MAIPU'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'VILLA ECONOMIA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'BARRIO PARQUE UNION Y FRATERNIDAD'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'BARRIO PROVINCIAS UNIDAS'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'VILLA GRAL. SAN MARTIN (BANFIELD-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'VILLA RECREO'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'BANFIELD'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1828',
//     city: 'BARRIO MARIANO MORENO (BANFIELD-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1829',
//     city: 'VILLA ALBERTINA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1831',
//     city: 'FIORITO'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'VILLA BARRIO LAPRIDA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'PARQUE MITRE'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'BARRIO PARQUE BARON'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'VILLA RITA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'VILLA BARRIO ARCA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'KILOMETRO 34 (APEADERO FCDFS) (SANTA MARTA-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'LOMAS DE ZAMORA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1832',
//     city: 'VILLA EL FARO'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'PARADA PASCO'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'PASCO (APEADERO FCGB)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'TEMPERLEY'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'BARRIO SAN JUAN (TEMPERLEY-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'CABAÑA SPINDOLA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1834',
//     city: 'TURDERA'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1835',
//     city: 'BARRIO SAN JOSE (PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'VILLA HENZ'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'BARRIO SANTA CATALINA (LLAVALLOL-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'LLAVALLOL'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'BARRIO LOS PINOS (LLAVALLOL-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'BARRIO ALTO VERDE (LLAVALLOL-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '490',
//     department: 'LOMAS DE ZAMORA',
//     zip: '1836',
//     city: 'SANTA CATALINA (ESTACION FCDFS) (LLAVALLOL-PDO. LOMAS DE ZAMORA)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6608',
//     city: 'OLIVERA'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'CUARTEL IV'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'BARRIO SANTA MARTA (LUJAN-PDO. LUJAN)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'SANTA ELENA (LUJAN-PDO. LUJAN)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'LEZICA Y TORREZURI (APEADERO FCDFS)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'CAMINERA LUJAN'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'CAÑADA DE ARIAS'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'LUJAN'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6700',
//     city: 'LA LOMA (LUJAN-PDO. LUJAN)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6701',
//     city: 'CARLOS KEEN'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6703',
//     city: 'TORRES'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6706',
//     city: 'VILLA FLANDRIA'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6706',
//     city: 'VILLA FRANCIA (VILLA FLANDRIA-PDO. LUJAN)'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6706',
//     city: 'JAUREGUI                                                                        '
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6708',
//     city: 'SUCRE'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6708',
//     city: 'DOCTOR DOMINGO CABRED'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6708',
//     city: 'COLONIA NACIONAL DE ALIENADOS'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6708',
//     city: 'MARISCAL SUCRE'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6708',
//     city: 'OPEN DOOR'
//   },
//   {
//     code: '497',
//     department: 'LUJAN',
//     zip: '6712',
//     city: 'CORTINES'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1911',
//     city: 'BARTOLOME BAVIO'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1911',
//     city: 'GENERAL MANSILLA'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1911',
//     city: 'JOSE FERRARI'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1911',
//     city: 'KILOMETRO 92 (APEADERO FCGR)'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'ROBERTO PAYRO'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'LOS NARANJOS'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'MAGDALENA'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'JULIO ARDITI'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'ATALAYA'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'EMPALME MAGDALENA'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1913',
//     city: 'CRISTINO BENAVIDEZ'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1915',
//     city: 'ARBUCO (DESVIO FCGR)'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1915',
//     city: 'PARAJE STARACHE'
//   },
//   {
//     code: '505',
//     department: 'MAGDALENA',
//     zip: '1915',
//     city: 'VIEYTES'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'CARI LARQUEA'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'LA COLORADA (SANTO DOMINGO-PDO. MAIPU)'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'LA AMORILLA'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'SANTO DOMINGO'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'MONSALVO'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7119',
//     city: 'SEGUROLA'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7160',
//     city: 'MAIPU'
//   },
//   {
//     code: '511',
//     department: 'MAIPU',
//     zip: '7172',
//     city: 'LAS ARMAS'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '',
//     city: 'MALVINAS ARGENTINAS                                                             '
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1612',
//     city: 'ADOLFO SOURDEAUX'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1612',
//     city: 'KILOMETRO 30'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'BARRIO EL LUCERO'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'INGENIERO PABLO NOGUES'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'BARRIO QUESADA PACHECO'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'BARRIO EL OMBU (LOS POLVORINES-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'LOS POLVORINES'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'YAPEYU'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'BARRIO PARQUE ALVEAR'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'KILOMETRO 34 (ING. PABLO NOGUES-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'EL SOL'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'BARRIO VILLA MAGDALENA'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1613',
//     city: 'GUADALUPE'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1614',
//     city: 'VILLA DE MAYO'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'BARRIO SANTA LUCIA'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'BARRIO DEVOTO'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'BARRIO IPARRAGUIRRE'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'KILOMETRO 36 (GRAND BOURG-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'KILOMETRO 38 (PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1615',
//     city: 'GRAND BOURG'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1665',
//     city: 'EL CRUCE'
//   },
//   {
//     code: '515',
//     department: 'MALVINAS ARGENTINAS',
//     zip: '1667',
//     city: 'TORTUGUITAS'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '2740',
//     city: 'ALMACEN LA COLONIA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '6555',
//     city: 'LA ARMONIA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7172',
//     city: 'HOGAR MARIANO ORTIZ BASUALDO'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7172',
//     city: 'COLONIA FERRARI'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7172',
//     city: 'GENERAL PIRAN'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'LA TOBIANA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'HARAS PRIMERO DE MAYO'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'EL VIGILANTE'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'CORONEL VIDAL'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'ARROYO GRANDE (CNEL. VIDAL-PDO. MAR CHIQUITA)'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'LAS CHILCAS (CNEL. VIDAL-PDO. MAR CHIQUITA)'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7174',
//     city: 'ESCUELA AGRICOLA RURAL N. EZEIZA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7609',
//     city: 'SANTA CLARA DEL MAR'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7609',
//     city: 'MAR CHIQUITA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7609',
//     city: 'SANTA ELENA (SANTA CLARA DEL MAR-PDO. MAR CHIQUITA)'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7612',
//     city: 'COBO'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7612',
//     city: 'VIVORATA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7612',
//     city: 'CALFUCURA'
//   },
//   {
//     code: '518',
//     department: 'MAR CHIQUITA',
//     zip: '7613',
//     city: 'NAHUEL RUCA'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'COLONIA NACIONAL DE MENORES'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'MARCOS PAZ'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'HOGAR RICARDO GUTIERREZ'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'ZAMUDIO (APEADERO FCDFS)'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'ELIAS ROMERO'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'COLONIA HOGAR RICARDO GUTIERREZ'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'KILOMETRO 45 (APEADERO FCGB) (MARCOS PAZ-PDO. MARCOS PAZ)'
//   },
//   {
//     code: '525',
//     department: 'MARCOS PAZ',
//     zip: '1727',
//     city: 'KILOMETRO 53 (PARADA FCGB)'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6600',
//     city: 'SAN JACINTO (PDO. MERCEDES)'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6600',
//     city: 'MERCEDES'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6600',
//     city: 'BARRIO PAMPA CHICA'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6600',
//     city: 'AGOTE'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'LA VERDE (PDO. MERCEDES)'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'TOMAS JOFRE'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'ALTAMIRA'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'LA VALEROSA (ESTACION FCGB)'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'COMAHUE OESTE'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'ESPORA'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6601',
//     city: 'SAN ELADIO'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6603',
//     city: 'KILOMETRO 117 (APEADERO FCGB)'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6608',
//     city: 'GOWLAND'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6608',
//     city: 'MANUEL JOSE GARCIA'
//   },
//   {
//     code: '532',
//     department: 'MERCEDES',
//     zip: '6614',
//     city: 'GOLDNEY'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1716',
//     city: 'VILLA MAGDALENA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1716',
//     city: 'LOS PARAISOS'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1716',
//     city: 'BARRIO NUEVO'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1716',
//     city: 'BARRIO LOS PARAISOS (LIBERTAD-PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1716',
//     city: 'LIBERTAD'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1718',
//     city: 'SAN ANTONIO DE PADUA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'VILLA LAGO DEL BOSQUE'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'BARRIO EL PERICON'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'PARQUE SAN MARTIN (PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'LOMA GRANDE'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'MERLO'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'BARRIO LOS VASCOS'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'AERODROMO ALBATROS'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1722',
//     city: 'LOMA FLORIDA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1723',
//     city: 'BARRIO SANTA ISABEL (MARIANO ACOSTA-PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1723',
//     city: 'RUTA 200 KILOMETRO 38'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1723',
//     city: 'MARIANO ACOSTA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1723',
//     city: 'KILOMETRO 38 (APEADERO FCGB) (MARIANO ACOSTA-PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1723',
//     city: 'AGUSTIN FERRARI'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'VILLA MONSEGUR'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'LOMAS DE YARAVI'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO LA VICTORIA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BALNEARIO CASCALLARES'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'LA PERLITA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO CASCALLARES'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO LOS CUATRO VIENTOS'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'LOMAS DE CASASCO'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'LOMAS DE SAN JOSE'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO PARQUE SAMBRIZZI'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'PARQUE GAONA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'VILLA MALAVER'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO LOS LIMONES'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1744',
//     city: 'BARRIO LAS ROSAS'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'BARRIO LA TEJA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'BARRIO EL SOL (PONTEVEDRA-PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'BARRIO EL OMBU (PONTEVEDRA-PDO. MERLO)'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'VILLA SANTA JULIA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'PONTEVEDRA'
//   },
//   {
//     code: '539',
//     department: 'MERLO',
//     zip: '1761',
//     city: 'BARRIO OLAECHEA'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'FRANCISCO A. BERRA'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'GOYENECHE'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'LOS EUCALIPTUS (APEADERO FCGB)'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'MONTE'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'FUNKE (APEADERO FCGB)'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7220',
//     city: 'GUARDIA DEL MONTE'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7221',
//     city: 'PALMITAS'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7226',
//     city: 'ZENON VIDELA DORNA'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7226',
//     city: 'GORCHS'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7226',
//     city: 'KILOMETRO 146 (APEADERO FCGR)'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7226',
//     city: 'LOS CERRILLOS'
//   },
//   {
//     code: '547',
//     department: 'MONTE',
//     zip: '7228',
//     city: 'ABBOTT'
//   },
//   {
//     code: '553',
//     department: 'MONTE HERMOSO',
//     zip: '8150',
//     city: 'FARO RECALADA'
//   },
//   {
//     code: '553',
//     department: 'MONTE HERMOSO',
//     zip: '8153',
//     city: 'SAUCE GRANDE'
//   },
//   {
//     code: '553',
//     department: 'MONTE HERMOSO',
//     zip: '8153',
//     city: 'BALNEARIO SAUCE GRANDE'
//   },
//   {
//     code: '553',
//     department: 'MONTE HERMOSO',
//     zip: '8153',
//     city: 'MONTE HERMOSO'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '',
//     city: 'BARRIO SATELITE II'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '',
//     city: 'LAS FLORES                                                                      '
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1664',
//     city: 'TRUJUI'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1664',
//     city: 'BARRIO LOS PARAISOS (TRUJUI-PDO. MORENO)'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1742',
//     city: 'BARRIO LA RECONQUISTA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1742',
//     city: 'BARRIO ARCO IRIS'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1742',
//     city: 'VILLA GRAL. ZAPIOLA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1742',
//     city: 'PASO DEL REY'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'BARRIO LA PORTEÑA (MORENO-PDO. MORENO)'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'EL COLMENAR'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'CUARTEL V'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'BARRIO VILLA ANITA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'MORENO'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'LA PORTEÑA (MORENO-PDO. MORENO)'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'BARRIO JARDINES DE MORENO'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'BARRIO JOSE A. CORTEJARENA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'BARRIO SAN JOSE (MORENO-PDO. MORENO)'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'MI BARRIO'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1744',
//     city: 'LA REJA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO VILLA ESCOBAR'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO GENERAL GUEMES'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO LA TRADICION'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'VILLA ESCOBAR'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'AGUA DE ORO'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO MARAVILLA DEL OESTE'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO EL PORVENIR'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO LA PROVIDENCIA'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO LOS EUCALIPTOS (FRANCISCO ALVAREZ-PDO. MORENO)'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'FRANCISCO ALVAREZ'
//   },
//   {
//     code: '560',
//     department: 'MORENO',
//     zip: '1746',
//     city: 'BARRIO LA REJA GRANDE'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1684',
//     city: 'EL PALOMAR'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1706',
//     city: 'MARIANO J. HAEDO'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1706',
//     city: 'DOMINGO FAUSTINO SARMIENTO'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1706',
//     city: 'HAEDO'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO SAN JOSE (MORON-PDO. MORON)'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO DE LA MERCED'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO AVIACION'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO LA CABAÑA'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO PARQUE PELUFFO'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'MORON'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO MANZANAR DE KAISER'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1708',
//     city: 'BARRIO SAN FRANCISCO'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1712',
//     city: 'CASTELAR'
//   },
//   {
//     code: '568',
//     department: 'MORON',
//     zip: '1714',
//     city: 'BARRIO SAN JUAN (ITUZAINGO-PDO. MORON)'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'GONZALEZ RISOS'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'KILOMETRO 83'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'INGENIERO WILLIAMS'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'KILOMETRO 116 (APEADERO FCGR)'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'NAVARRO'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6605',
//     city: 'KILOMETRO 90 (APEADERO FCGB)'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6607',
//     city: 'LAS MARIANAS'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6607',
//     city: 'ESTEBAN DIAZ'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6607',
//     city: 'ANASAGASTI'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6623',
//     city: 'JUAN JOSE ALMEYRA'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '6627',
//     city: 'MOLL'
//   },
//   {
//     code: '574',
//     department: 'NAVARRO',
//     zip: '7243',
//     city: 'SOL DE MAYO (PDO. NAVARRO)'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7005',
//     city: 'LA NEGRA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7005',
//     city: 'CLARAZ'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7011',
//     city: 'JUAN N. FERNANDEZ'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO NUESTRO HOGAR'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO OBRERO (NECOCHEA-PDO. NECOCHEA)'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'MEDANO BLANCO'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'HOSPITAL NECOCHEA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'NECOCHEA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO CENTRO'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO ROSI'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO BANCO PROVINCIA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'LA PRIMITIVA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'PUERTO NECOCHEA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7630',
//     city: 'BARRIO NUEVA POMPEYA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7631',
//     city: 'QUEQUEN'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7631',
//     city: 'PUERTO QUEQUEN'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7631',
//     city: 'BARRIO ESTACION QUEQUEN'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7631',
//     city: 'LA PLAYA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7631',
//     city: 'COSTA BONITA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7635',
//     city: 'SAN JOSE (PDO. NECOCHEA)'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7637',
//     city: 'NICANOR OLIVERA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7637',
//     city: 'LA DULCE'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7639',
//     city: 'COOPER'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7641',
//     city: 'ENERGIA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7641',
//     city: 'RAMON SANTAMARINA'
//   },
//   {
//     code: '581',
//     department: 'NECOCHEA',
//     zip: '7641',
//     city: 'EL PITO (ENERGIA-PDO. NECOCHEA)'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '2741',
//     city: 'MARCELINO UGARTE'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'FAUZON'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'VILLA FOURNIER'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'MANUEL B. GONNET'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: '9 DE JULIO'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'SAN JUAN (9 DE JULIO-PDO. 9 DE JULIO)'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'VILLA DIAMANTINA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6500',
//     city: 'BARRIO JULIO DE VEDIA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'LAGUNA DEL CURA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'NORUMBEGA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'DOCE DE OCTUBRE'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'TROPEZON'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'ESTACION PROVINCIAL 9 DE JULIO'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6501',
//     city: 'MULCAHY'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6503',
//     city: 'DESVIO KILOMETRO 234'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6503',
//     city: 'PATRICIOS'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6503',
//     city: 'KILOMETRO 234'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6505',
//     city: 'DUDIGNAC'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6507',
//     city: 'GERENTE CILLEY'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6507',
//     city: 'SANTOS UNZUE'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6507',
//     city: 'LAS NEGRAS'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6507',
//     city: 'MOREA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6507',
//     city: 'CORBETT'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6513',
//     city: 'LA YESCA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6513',
//     city: 'LA AURORA (LA NIÑA-PDO. 9 DE JULIO)'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6513',
//     city: 'COLONIA LAS YESCAS'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6513',
//     city: 'GALO LLORENTE'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6513',
//     city: 'LA NIÑA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6515',
//     city: 'CARLOS MARIA NAON'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6515',
//     city: 'EL TEJAR'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6516',
//     city: 'CAMBACERES'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6516',
//     city: 'AMALIA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6516',
//     city: 'DENNEHY'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6516',
//     city: 'BACACAY'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6516',
//     city: 'FRENCH'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6531',
//     city: 'EL JABALI'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'PUEBLO MARTINEZ DE HOZ'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'RAMON J. NEILD'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'ALFREDO DEMARCHI'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'QUIROGA'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'REGINALDO J. NEILD'
//   },
//   {
//     code: '588',
//     department: 'NUEVE DE JULIO',
//     zip: '6533',
//     city: 'FACUNDO QUIROGA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6500',
//     city: 'VILLA ARRIETA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6500',
//     city: 'VILLA LA SERRANIA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6557',
//     city: 'MAPIS'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6557',
//     city: 'ITURREGUI'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6559',
//     city: 'RECALDE'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6561',
//     city: 'LA PROTEGIDA (ESPIGAS-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6561',
//     city: 'BLANCAGRANDE'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '6561',
//     city: 'ESPIGAS'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7318',
//     city: 'VILLA MONICA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7318',
//     city: 'COLONIA HINOJO'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7318',
//     city: 'COLONIA RUSA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7318',
//     city: 'HINOJO'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7318',
//     city: 'COLONIA NIEVAS'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'BARRIO JARDIN'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'LAS PIEDRITAS (OLAVARRIA-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'PUEBLO NUEVO (OLAVARRIA-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'BARRIO VILLA MAILIN'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'POURTALE'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'BARRIO LA LUISA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'OLAVARRIA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'SAN JACINTO (OLAVARRIA-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7400',
//     city: 'CALERA AVELLANEDA (DESVIO PARTICULAR FCGR)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'CANTERAS DE GREGORINI'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'DURAÑONA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'TENIENTE CORONEL MIÑANA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'EMPALME QUERANDIES'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'SAN JUAN (SANTA LUISA-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'SANTA LUISA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7401',
//     city: 'SIERRA CHICA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LA NARCISA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'SIERRAS BAYAS'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'CERRO SOTUYO'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'CERRO AGUILA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LA PROVIDENCIA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LA ESTRELLA (SIERRAS BAYAS-PDO. OLAVARRIA)'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'COLONIA SAN MIGUEL'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'ALVARO BARROS'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'CERRO NEGRO'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'FORTABAT'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LA TOMASA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LA PALMIRA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7403',
//     city: 'LOMA NEGRA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7404',
//     city: 'MUÑOZ'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7404',
//     city: 'ROCHA'
//   },
//   {
//     code: '595',
//     department: 'OLAVARRIA',
//     zip: '7436',
//     city: 'VILLA A FORTABAT (OLAVARRIA)'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8142',
//     city: 'COLONIA SAN FRANCISCO (JUAN A. PRADERE-PDO. PATAGONES)'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8142',
//     city: 'JUAN A. PRADERE'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8504',
//     city: 'PATAGONES'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8504',
//     city: 'FARO SEGUNDA BARRANCA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8504',
//     city: 'LAS CORTADERAS (CARMEN DE PATAGONES-PDO. PATAGONES)'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8504',
//     city: 'CARMEN DE PATAGONES'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8506',
//     city: 'PUERTO WASSERMANN'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8506',
//     city: 'SALINA DE PIEDRA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8506',
//     city: 'BAHIA SAN BLAS'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8506',
//     city: 'CARDENAL CAGLIERO'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'EMILIO LAMARCA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'JARILLA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'PUERTO TRES BONETES'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'COLONIA LA CELINA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'EMPORIO STROEDER'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'AMBROSIO P. LEZICA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'STROEDER'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'COLONIA MIGUEL ESTEVERENA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8508',
//     city: 'JOSE B. CASAS'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8512',
//     city: 'LOS POZOS'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8512',
//     city: 'IGARZABAL'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8512',
//     city: 'VILLA LONGA'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8512',
//     city: 'VILLA ELENA (VILLALONGA-PDO. PATAGONES)'
//   },
//   {
//     code: '602',
//     department: 'PATAGONES',
//     zip: '8512',
//     city: 'VILLALONGA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6405',
//     city: 'ALBARIÑO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6450',
//     city: 'ABEL'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6450',
//     city: 'ROVIRA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6450',
//     city: 'PEHUAJO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6450',
//     city: 'BARRIO OBRERO (PEHUAJO-PDO. PEHUAJO)'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6450',
//     city: 'SANTA CECILIA SUD'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'NUEVA PLATA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'GIRONDO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'LARRAMENDY'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'ANCON'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'PEDRO GAMEN'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'MAGDALA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'GNECCO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6451',
//     city: 'INOCENCIO SOSA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6461',
//     city: 'LA COTORRA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6461',
//     city: 'CAPITAN CASTRO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6463',
//     city: 'ALAGON'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6469',
//     city: 'MONES CAZON'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6469',
//     city: 'ASTURIAS'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6471',
//     city: 'SALAZAR'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6472',
//     city: 'FRANCISCO MADERO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6474',
//     city: 'JUAN JOSE PASO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6474',
//     city: 'CAMPO ARISTIMUÑO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6474',
//     city: 'EL RECADO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6475',
//     city: 'LA HIGUERA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6475',
//     city: 'LOS CHAÑARES'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6475',
//     city: 'FRANCISCO MAGNANO'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6475',
//     city: 'ESTEBAN DE LUCA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6476',
//     city: 'CHICLANA'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6476',
//     city: 'LAS JUANITAS'
//   },
//   {
//     code: '609',
//     department: 'PEHUAJO',
//     zip: '6476',
//     city: 'GUANACO'
//   },
//   {
//     code: '616',
//     department: 'PELLEGRINI',
//     zip: '6346',
//     city: 'PELLEGRINI'
//   },
//   {
//     code: '616',
//     department: 'PELLEGRINI',
//     zip: '6348',
//     city: 'DE BARY'
//   },
//   {
//     code: '616',
//     department: 'PELLEGRINI',
//     zip: '6348',
//     city: 'BOCAYUVA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'TAMBO NUEVO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'PUEBLO OTERO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO TROCHA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'VILLA PROGRESO (PERGAMINO-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'HOSPITAL SANATORIO DE LLANURA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'FRANCISCO AYERZA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO 25 DE MAYO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO GENERAL MANUEL BELGRANO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO MALVINAS ARGENTINAS'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'LA CORA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'CAMPO BUENA VISTA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO ACEVEDO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'VILLA OTERO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'CHACRA EXPERIMENTAL'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'PERGAMINO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'SANTA RITA (PERGAMINO-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'VILLA SAN JOSE'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'VILLA ANGELICA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'JUAN ANCHORENA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2700',
//     city: 'BARRIO JOSE HERNANDEZ'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2701',
//     city: 'MARIANO BENITEZ'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2701',
//     city: 'DOCE DE AGOSTO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2701',
//     city: 'HARAS EL CENTINELA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2701',
//     city: 'RANCAGUA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2701',
//     city: 'SANTA TERESITA PERGAMINO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2703',
//     city: 'ORTIZ BASUALDO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2703',
//     city: 'COLONIA SAN FERMIN'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2703',
//     city: 'PLUMACHO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2703',
//     city: 'PINZON'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2713',
//     city: 'MANUEL OCAMPO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2715',
//     city: 'LA VANGUARDIA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2715',
//     city: 'EL SOCORRO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2715',
//     city: 'LA MARGARITA (EL SOCORRO-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'GORNATTI'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'MANANTIALES GRANDES'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'ACEVEDO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'MANANTIALES'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'JUAN A. DE LA PEÑA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2717',
//     city: 'GUERRICO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2718',
//     city: 'MAGUIRE'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2718',
//     city: 'MARIANO H. ALFONZO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2718',
//     city: 'MANZO Y NIÑO'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2718',
//     city: 'URQUIZA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2718',
//     city: 'FONTEZUELA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LA REINA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LA NENA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LOS TOLDOS'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LA NORIA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'LA SARITA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LABORDEBOY'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA LA INVERNADA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'COLONIA STEGMAN'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2751',
//     city: 'LA VIOLETA'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2754',
//     city: 'SAN RAMON (VIÑA-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2754',
//     city: 'EL CARMEN (VIÑA-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2754',
//     city: 'SAN JUAN (VIÑA-PDO. PERGAMINO)'
//   },
//   {
//     code: '623',
//     department: 'PERGAMINO',
//     zip: '2909',
//     city: 'JUAN G. PUJOL'
//   },
//   {
//     code: '630',
//     department: 'PILA',
//     zip: '7116',
//     city: 'DON VICENTE'
//   },
//   {
//     code: '630',
//     department: 'PILA',
//     zip: '7116',
//     city: 'PILA'
//   },
//   {
//     code: '630',
//     department: 'PILA',
//     zip: '7116',
//     city: 'LAS CHILCAS (PILA-PDO. PILA)'
//   },
//   {
//     code: '630',
//     department: 'PILA',
//     zip: '7225',
//     city: 'LA VICTORIA (PDO. PILA)'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1627',
//     city: 'ZELAYA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'KILOMETRO 61 (APEADERO FCGB)'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'ALMIRANTE IRIZAR'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'MANZANARES'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'ESTABLECIMIENTO SAN MIGUEL'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'BARRIO SAN ALEJO'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'VILLA SANTA MARIA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'VILLA VERDE'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'PILAR'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'VILLA AGUEDA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1629',
//     city: 'VILLA BUIDE'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1631',
//     city: 'VILLA ROSA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1633',
//     city: 'EMPALME'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1633',
//     city: 'FATIMA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1633',
//     city: 'MANZONE'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1633',
//     city: 'VILLA ASTOLFI'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1635',
//     city: 'TORO'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1635',
//     city: 'KILOMETRO 45 (APEADERO FCGU) (PTE. DERQUI-PDO. PILAR)'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1635',
//     city: 'PRESIDENTE DERQUI'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO LA GRANJA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO LOS GALLITOS'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO YEI-PORA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'EL CALLAO'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'KILOMETRO 40 (TORTUGUITAS-PDO. PILAR)'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO LA QUERENCIA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO PARQUE KANMAR'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'BARRIO CHELITO'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'MANUEL ALBERTI (APEADERO FCGB)'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'RUTA 8 KILOMETRO 37'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'LOS PERALES'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1667',
//     city: 'EL PALENQUE'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1669',
//     city: 'DEL VISO'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '1669',
//     city: 'LA LONJA'
//   },
//   {
//     code: '638',
//     department: 'PILAR',
//     zip: '2812',
//     city: 'CARLOS LEMEE'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7167',
//     city: 'PINAMAR'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7167',
//     city: 'VALERIA DEL MAR'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7167',
//     city: 'CARILO'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7167',
//     city: 'PARQUE CARILO'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7167',
//     city: 'OSTENDE'
//   },
//   {
//     code: '644',
//     department: 'PINAMAR',
//     zip: '7169',
//     city: 'JUANCHO'
//   },
//   {
//     code: '648',
//     department: 'PRESIDENTE PERON',
//     zip: '',
//     city: 'PRESIDENTE PERON                                                                '
//   },
//   {
//     code: '648',
//     department: 'PRESIDENTE PERON',
//     zip: '1862',
//     city: 'BARRIO SANTA MAGDALENA'
//   },
//   {
//     code: '648',
//     department: 'PRESIDENTE PERON',
//     zip: '1862',
//     city: 'GUERNICA'
//   },
//   {
//     code: '648',
//     department: 'PRESIDENTE PERON',
//     zip: '1862',
//     city: 'BARRIO SAN PABLO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8117',
//     city: 'LOPEZ LECUBE'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8124',
//     city: 'LA POCHOLA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8124',
//     city: 'SAN GERMAN'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8126',
//     city: 'GENERAL RONDEAU'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8126',
//     city: 'LA COLORADA CHICA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8126',
//     city: 'VILLA IRIS'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8126',
//     city: 'ALDEA SAN ANDRES'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8127',
//     city: 'RIVADEO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8127',
//     city: 'ESTELA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8129',
//     city: 'GLORIALDO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8129',
//     city: 'FELIPE SOLA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8129',
//     city: 'DIECISIETE DE AGOSTO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8136',
//     city: 'SAN JOSE (ALGARROBO-PDO. PUAN)'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8180',
//     city: 'VIBORAS'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8180',
//     city: 'COLONIA DOCTOR GOBERNADOR UDAONDO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8180',
//     city: 'PUAN'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8180',
//     city: 'VILLA CASTELAR'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8180',
//     city: 'VILLA DURCUDOY'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8181',
//     city: 'ERIZE'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8181',
//     city: 'LAS VASCONGADAS'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8181',
//     city: 'AZOPARDO'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8181',
//     city: 'COLONIA EL PINCEN'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8181',
//     city: 'COLONIA HIPOLITO YRIGOYEN'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8183',
//     city: 'COLONIA LA VASCONGADA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8183',
//     city: 'DARREGUEIRA'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8183',
//     city: 'CAÑADA MARIANO (EMBARCADERO FCDFS)'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8183',
//     city: 'TRES CUERVOS'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8187',
//     city: 'BORDENAVE'
//   },
//   {
//     code: '651',
//     department: 'PUAN',
//     zip: '8187',
//     city: 'LA ROSALIA'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1917',
//     city: 'VERONICA'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1917',
//     city: 'LUIS CHICO'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1917',
//     city: 'LAS TAHONAS'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1917',
//     city: 'PUNTA INDIO'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1917',
//     city: 'MONTE VELOZ'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1919',
//     city: 'BASE AERONAVAL DE PUNTA INDIO'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'EL ROSARIO'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'LA PRIMAVERA (ALVAREZ JONTE-PDO. MAGDALENA)'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'ALVAREZ JONTE'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'RINCON DE NOARIO'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'LAS PIPINAS'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'PIPINAS'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'PANCHO DIAZ'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'LOS SANTOS VIEJOS'
//   },
//   {
//     code: '655',
//     department: 'PUNTA INDIO',
//     zip: '1921',
//     city: 'PIÑEIRO (DESVIO PARTICULAR FCGR)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1876',
//     city: 'BERNAL'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1876',
//     city: 'BARRIO PASCO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1876',
//     city: 'CAMINO GRAL. BELGRANO (KM. 11 AL 11'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1876',
//     city: 'DON BOSCO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA ARGENTINA (QUILMES-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA DEYA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA MARIA (QUILMES-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA LAS ROSAS'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA ELENA (QUILMES-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA AUGUSTA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'BARRIO HORNOS'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA LUJAN'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA FLORENTINO AMEGHINO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA ESMERALDA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'VILLA LA ROSA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1878',
//     city: 'QUILMES'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'CAMINO GRAL. BELGRANO (KM. 12 AL 17'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'CAMINO CALCHAQUI (KM. 17'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'BARRIO LOS EUCALIPTOS (QUILMES OESTE-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'BARRIO EL DORADO (QUILMES OESTE-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'BARRIO SANTO DOMINGO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'BARRIO LAS MARGARITAS (QUILMES OESTE-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'BARRIO SAN DOMINGO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1879',
//     city: 'QUILMES OESTE'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'BARRIO GUADALUPE (SAN FRANCISCO SOLANO-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'BARRIO SANTA ISABEL (SAN FRANCISCO SOLANO-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'BARRIO SANTA CATALINA (SAN FRANCISCO SOLANO-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'SANTA ISABEL (SAN FRANCISCO SOLANO-PDO. QUILMES)'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'SAN FRANCISCO SOLANO                                                            '
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1881',
//     city: 'VILLA LA FLORIDA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1882',
//     city: 'EZPELETA'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1882',
//     city: 'BARRIO EL REFUGIO'
//   },
//   {
//     code: '658',
//     department: 'QUILMES',
//     zip: '1882',
//     city: 'BARRIO FERROVIARIO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2912',
//     city: 'SANCHEZ'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2912',
//     city: 'LA QUERENCIA'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2912',
//     city: 'SANTA TERESA (SANCHEZ-PDO. RAMALLO)'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2914',
//     city: 'BARRIO DON ANTONIO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2914',
//     city: 'COSTA BRAVA'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2914',
//     city: 'VILLA RAMALLO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2914',
//     city: 'VILLA ESTACION RAMALLO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2915',
//     city: 'RAMALLO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2915',
//     city: 'CAMPO AGUIRREZABALA'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2915',
//     city: 'AGUIRREZABALA'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2915',
//     city: 'VILLA GENERAL SAVIO'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2916',
//     city: 'LAS BAHAMAS'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2916',
//     city: 'EL PARAISO (PDO. RAMALLO)'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2916',
//     city: 'HARAS EL OMBU'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2916',
//     city: 'EL JUPITER'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2933',
//     city: 'LA BOLSA'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2933',
//     city: 'PEREZ MILLAN'
//   },
//   {
//     code: '665',
//     department: 'RAMALLO',
//     zip: '2933',
//     city: 'COLONIA VELAZ'
//   },
//   {
//     code: '672',
//     department: 'RAUCH',
//     zip: '7203',
//     city: 'LOMA PARTIDA'
//   },
//   {
//     code: '672',
//     department: 'RAUCH',
//     zip: '7203',
//     city: 'GALERA DE TORRES'
//   },
//   {
//     code: '672',
//     department: 'RAUCH',
//     zip: '7203',
//     city: 'RAUCH'
//   },
//   {
//     code: '672',
//     department: 'RAUCH',
//     zip: '7203',
//     city: 'EL CARMEN DE LANGUEYU'
//   },
//   {
//     code: '672',
//     department: 'RAUCH',
//     zip: '7203',
//     city: 'VILLA SAN PEDRO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6233',
//     city: 'CONDARCO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6233',
//     city: 'SANSINENA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6237',
//     city: 'AMERICA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6237',
//     city: 'CERRITO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6237',
//     city: 'RIVADAVIA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6239',
//     city: 'SAN MAURICIO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6239',
//     city: 'GONZALEZ MORENO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6239',
//     city: 'MERIDIANO V"'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6401',
//     city: 'VALENTIN GOMEZ'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6401',
//     city: 'SUNDBLAD'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'ROOSEVELT (PDO. RIVADAVIA)'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'BADANO'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'FORTIN OLAVARRIA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'MIRA PAMPA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'LA CAUTIVA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'VILLA SENA'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'COLONIA EL BALDE'
//   },
//   {
//     code: '679',
//     department: 'RIVADAVIA',
//     zip: '6403',
//     city: 'FRANCISCO DE VITORIA'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2703',
//     city: 'CARABELAS'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2703',
//     city: 'ROBERTO CANO'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'VILLA PROGRESO (ROJAS-PDO. ROJAS)'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'KILOMETRO 36 (EMBARCADERO FCGM) (ROJAS-PDO. ROJAS)'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'ROJAS'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'HARAS SAN JACINTO'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'CUATRO DE NOVIEMBRE'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'VILLA MANUEL POMAR'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2705',
//     city: 'PIRUCO'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2707',
//     city: 'GUIDO SPANO'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2707',
//     city: 'LAS SALADAS'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2707',
//     city: 'LA NACION'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2707',
//     city: 'HUNTER'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2709',
//     city: 'SOL DE MAYO (PDO. ROJAS)'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '2709',
//     city: 'LOS INDIOS (PDO. ROJAS)'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '6001',
//     city: 'RAFAEL OBLIGADO'
//   },
//   {
//     code: '686',
//     department: 'ROJAS',
//     zip: '6003',
//     city: 'LA BEBA'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'ROQUE PEREZ'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'LA RINCONADA'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'HARAS EL SALASO'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'JUAN ATUCHA'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'SANTIAGO LARRE'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'LA PAZ'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7245',
//     city: 'LA REFORMA (PDO. ROQUE PEREZ)'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7247',
//     city: 'CARLOS BEGUERIE'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7247',
//     city: 'CAMPO FUNCKE'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7247',
//     city: 'BARRIENTOS'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7247',
//     city: 'LA PAZ CHICA'
//   },
//   {
//     code: '693',
//     department: 'ROQUE PEREZ',
//     zip: '7247',
//     city: 'JUAN TRONCONI'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '2752',
//     city: 'ALMACEN DEL DESCANSO'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8164',
//     city: 'COLONIA SAN MARTIN'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8164',
//     city: 'COLONIA SAN PEDRO'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8164',
//     city: 'ARGUEDAS (DESVIO)'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8164',
//     city: 'DUFAUR'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8170',
//     city: 'PIGUE'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8170',
//     city: 'DUCOS'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8171',
//     city: 'ESPARTILLAR (PDO. SAAVEDRA)'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8172',
//     city: 'ARROYO CORTO (PDO. SAAVEDRA)'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8174',
//     city: 'ARROYO AGUAS BLANCAS'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8174',
//     city: 'SAAVEDRA'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8174',
//     city: 'SAN MARTIN DE TOURS'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8174',
//     city: 'LA SAUDADE'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8175',
//     city: 'GOYENA'
//   },
//   {
//     code: '700',
//     department: 'SAAVEDRA',
//     zip: '8180',
//     city: 'ALTA VISTA'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'LA RAZON'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'BARRIO VILLA SALADILLO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'JOSE R. SOJO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'JUAN BLAQUIER'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'EMILIANO REYNOSO (ESTACION FCGB)'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'SALADILLO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'LA CAMPANA'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'LA BARRANCOSA'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'ESTHER'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'EL MANGRULLO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7260',
//     city: 'LA MARGARITA (SALADILLO-PDO. SALADILLO)'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7261',
//     city: 'SALADILLO NORTE'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7261',
//     city: 'SAN BENITO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7265',
//     city: 'DEL CARRIL'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7265',
//     city: 'CAZON'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7267',
//     city: 'ALVAREZ DE TOLEDO'
//   },
//   {
//     code: '707',
//     department: 'SALADILLO',
//     zip: '7267',
//     city: 'POLVAREDAS'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2741',
//     city: 'LAS CUATRO PUERTAS'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2741',
//     city: 'SALTO'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2741',
//     city: 'BARRIO CENTRAL'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2741',
//     city: 'EL RETIRO (SALTO-PDO. SALTO)'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2743',
//     city: 'ARROYO DULCE'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2743',
//     city: 'MONROE'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2743',
//     city: 'TACUARI'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2743',
//     city: 'VILLA SAN JOSE'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2743',
//     city: 'BERDIER'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2745',
//     city: 'GAHAN'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2745',
//     city: 'LA INVENCIBLE'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2745',
//     city: 'KENNY'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2747',
//     city: 'INES INDART'
//   },
//   {
//     code: '714',
//     department: 'SALTO',
//     zip: '2747',
//     city: 'CORONEL ISLEÑO'
//   },
//   {
//     code: '721',
//     department: 'SALLIQUELO',
//     zip: '6335',
//     city: 'QUENUMA'
//   },
//   {
//     code: '721',
//     department: 'SALLIQUELO',
//     zip: '6335',
//     city: 'GRACIARENA'
//   },
//   {
//     code: '721',
//     department: 'SALLIQUELO',
//     zip: '6339',
//     city: 'SALLIQUELO'
//   },
//   {
//     code: '721',
//     department: 'SALLIQUELO',
//     zip: '6339',
//     city: 'CAILOMUTA'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '2764',
//     city: 'SOLIS'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6614',
//     city: 'FRANKLIN'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6705',
//     city: 'VILLA RUIZ'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6712',
//     city: 'VILLA ESPIL'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6720',
//     city: 'SAN ANDRES DE GILES'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6720',
//     city: 'VILLA SAN ALBERTO (PDO. SAN ANDRES DE GILES)'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6721',
//     city: 'AZCUENAGA'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6721',
//     city: 'TUYUTI'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6723',
//     city: 'CUCULLU'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6723',
//     city: 'HEAVY'
//   },
//   {
//     code: '728',
//     department: 'SAN ANDRES DE GILES',
//     zip: '6723',
//     city: 'KILOMETRO 108'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2760',
//     city: 'COLONIA LOS TRES USTARIS'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2760',
//     city: 'SAN ANTONIO DE ARECO'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2760',
//     city: 'PUENTE CASTEX'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2761',
//     city: 'VILLA LIA'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2763',
//     city: 'PUESTO DEL MEDIO'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2763',
//     city: 'KILOMETRO 102'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2763',
//     city: 'FLAMENCO'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2764',
//     city: 'VAGUES'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2764',
//     city: 'DUGGAN'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2764',
//     city: 'CHENAUT'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2764',
//     city: 'GOBERNADOR ANDONAEGUI'
//   },
//   {
//     code: '735',
//     department: 'SAN ANTONIO DE ARECO',
//     zip: '2764',
//     city: 'CAMPO LA NENA'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7503',
//     city: 'SANTA CATALINA (CRISTIANO MUERTO-PDO. SAN CAYETANO)'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7503',
//     city: 'CRISTIANO MUERTO'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7521',
//     city: 'DEFERRARI'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7521',
//     city: 'SAN CAYETANO'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7521',
//     city: 'OCHANDIO'
//   },
//   {
//     code: '742',
//     department: 'SAN CAYETANO',
//     zip: '7639',
//     city: 'LUMB'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1644',
//     city: 'VICTORIA'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1644',
//     city: 'DOCTOR ALBERT SCHWEITZER (PARADA FCGM)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1646',
//     city: 'VILLA DEL CARMEN (SAN FERNANDO-PDO. SAN FERNANDO)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1646',
//     city: 'SAN FERNANDO'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1646',
//     city: 'VIRREYES'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1646',
//     city: 'BARRIO SAN JORGE (SAN FERNANDO-PDO. SAN FERNANDO)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1647',
//     city: 'RIO PARANA GUAZU'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1647',
//     city: 'ARROYO SARANDI'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1647',
//     city: 'ARROYO EL TORO'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1647',
//     city: 'ARROYO TOLEDITO'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1649',
//     city: 'ARROYO LOS LOBOS (PDO. SAN FERNANDO)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1649',
//     city: 'ARROYO GRANDE (TIGRE-PDO. SAN FERNANDO)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '1649',
//     city: 'ARROYO CARPINCHO (PDO. SAN FERNANDO)'
//   },
//   {
//     code: '749',
//     department: 'SAN FERNANDO',
//     zip: '2751',
//     city: 'ALMACEN CASTRO'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1607',
//     city: 'BARRIO OBRERO FERROVIARIO'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1607',
//     city: 'VILLA ADELINA'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1607',
//     city: 'JOSE MARTI'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1607',
//     city: 'BARRIO STELLA MARIS'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1609',
//     city: 'BOULOGNE SUR MER'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1609',
//     city: 'BOULOGNE'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1640',
//     city: 'MARTINEZ'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1640',
//     city: 'BARRIO VILLA PRIMAVERA'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1640',
//     city: 'ACASSUSO'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1642',
//     city: 'MONTE VIEJO'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1642',
//     city: 'SAN ISIDRO'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1642',
//     city: 'BARRIO GENERAL PUEYRREDON'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1642',
//     city: 'BARRIO BOATING CLUB'
//   },
//   {
//     code: '756',
//     department: 'SAN ISIDRO',
//     zip: '1643',
//     city: 'BECCAR'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '',
//     city: 'BARRIO JORGE NEWBERY (BELLA VISTA-PDO. SAN MIGUEL)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1659',
//     city: 'ESCUELA PROFESIONAL GENERAL LEMOS'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1659',
//     city: 'CAMPO DE MAYO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1659',
//     city: 'BARRIO SARGENTO CABRAL CAMPO DE MAYO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1659',
//     city: 'ESCUELA SUBOFICIALES SARGENTO CABRAL (APEADERO FCGU)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'CAPITAN LOZANO (APEADERO FCGU)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'BARRIO MAYOR IRUSTA'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'BARRIO JORGE NEWBERY (BELLA VISTA-SAN MIGUEL)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'BARRIO OBLIGADO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'TENIENTE GRAL. RICCHIERI'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'SARGENTO BARRUFFALDI (PARADERO FCGU)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'BELLA VISTA                                                                     '
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1661',
//     city: 'TENIENTE AGNETA (APEADERO FCGU)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO NORTE SARMIENTO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO MARIANO MORENO (SAN MIGUEL-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO BARILARI'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO EL FARO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO LOS EUCALIPTOS (SAN MIGUEL-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO SOLAR DEL NORTE'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO CORTIJO NUEVO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO MITRE (SAN MIGUEL-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO PARQUE LA GLORIA'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'MUÑIZ'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'GENERAL SARMIENTO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'LA ESTRELLA (TRUJUI-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO MARTIN FIERRO (SAN MIGUEL-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'LOMAS DE MARILO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO EL CORTIJO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO LOS NOGALES'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'PARQUE EL CORTIJO'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO LOS PINOS (S. MIGUEL ESTAF. N" 6-PDO. GRAL. SARMIENTO)'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'SAN MIGUEL'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO LA ESTRELLA'
//   },
//   {
//     code: '760',
//     department: 'SAN MIGUEL',
//     zip: '1663',
//     city: 'BARRIO SANTA BRIGIDA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO LAS LOMAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO DESTILERIA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO SUPER USINA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO NOVAMUR'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO ALTO VERDE (SAN NICOLAS-PDO. SAN NICOLAS)'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'CAMINERA SAN NICOLAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO CARCEL'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'SAN NICOLAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO 9 DE JULIO (SAN NICOLAS-PDO. S. NICOLAS)'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO ZONA SUPER USINA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'PUERTO SAN NICOLAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO PARQUE'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'VILLA ESPERANZA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'CERNADAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2900',
//     city: 'BARRIO MITRE (SAN NICOLAS-PDO. SAN NICOLAS)'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2901',
//     city: 'LA EMILIA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2901',
//     city: 'VILLA HERMOSA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2901',
//     city: 'BARRIO SIDERURGIA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2901',
//     city: 'BARRIO GENERAL MANUEL SAVIO'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2901',
//     city: 'BARRIO SOMISA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2903',
//     city: 'EREZCANO'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2903',
//     city: 'LOS DOS AMIGOS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2903',
//     city: 'CAMPOS SALLES'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2903',
//     city: 'LOPEZ ARIAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2905',
//     city: 'COLONIA LA ALICIA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2905',
//     city: 'GENERAL ROJO'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2907',
//     city: 'PUJOL'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2907',
//     city: 'INGENIERO URCELAY (ESTACION FCGB)'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2907',
//     city: 'CONESA'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2909',
//     city: 'ESTANCIAS'
//   },
//   {
//     code: '763',
//     department: 'SAN NICOLAS',
//     zip: '2909',
//     city: 'MUTTI'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'LAS CANALETAS'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'RUTA 9 KILOMETRO 169'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'SAN PEDRO'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'LA BUENA MOZA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'BARRIO COBOS'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'VILLA SARITA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'VILLAIGRILLO'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'VILLA DEPIETRI'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2930',
//     city: 'BARRIO LAS CANALETAS'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2931',
//     city: 'LA MATILDE'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2931',
//     city: 'VUELTA DE OBLIGADO'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2931',
//     city: 'OLIVEIRA CEZAR'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2931',
//     city: 'ISLA LOS LAURELES'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2931',
//     city: 'PANAME'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'ALGARROBO (ING. MONTETA-PDO. SAN PEDRO)'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'DOYLE'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'EL DESCANSO'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'PARADA KILOMETRO 158'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'INGENIERO MONETA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'SANTA LUCIA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'KILOMETRO 172'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2935',
//     city: 'ARROYO BURGOS'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2944',
//     city: 'RIO TALA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2944',
//     city: 'VILLA TERESA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2946',
//     city: 'VILLA LEANDRA'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2946',
//     city: 'GOBERNADOR CASTRO'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2946',
//     city: 'KILOMETRO 184 (APEADERO FCGM)'
//   },
//   {
//     code: '770',
//     department: 'SAN PEDRO',
//     zip: '2946',
//     city: 'EL ESPINILLO'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '0',
//     city: 'ALEJANDRO KORN'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1864',
//     city: 'EMPALME SAN VICENTE'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1864',
//     city: 'ALEJANDRO KOM'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1865',
//     city: 'SAN VICENTE'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1865',
//     city: 'EL PAMPERO'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1865',
//     city: 'LA ARGENTINA'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1865',
//     city: 'LA FORTUNA'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1984',
//     city: 'DOMSELAAR'
//   },
//   {
//     code: '778',
//     department: 'SAN VICENTE',
//     zip: '1984',
//     city: 'HARAS RATAPLAN'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6612',
//     city: 'ROMAN BAEZ'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6612',
//     city: 'SUIPACHA'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6612',
//     city: 'HARAS LA ELVIRA'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6612',
//     city: 'LA SARA (SUIPACHA-PDO. SUIPACHA)'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6612',
//     city: 'CAPDEPONT'
//   },
//   {
//     code: '784',
//     department: 'SUIPACHA',
//     zip: '6614',
//     city: 'RIVAS'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'EL GALLO'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'CERRO DE LOS LEONES'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'CANTERA LA FEDERACION'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'BARRIO VILLA GAUCHO'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'CANTERA ALBION'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'LA NUMANCIA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'TANDIL'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'VILLA ITALIA (TANDIL-PDO. TANDIL)'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'CANTERA SAN LUIS'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'VILLA GALICIA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7000',
//     city: 'DESVIO AGUIRRE'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7001',
//     city: 'LA PASTORA (PDO. TANDIL)'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7001',
//     city: 'CERRO LEONES'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7003',
//     city: 'ACEILAN'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7003',
//     city: 'GARDEY'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7003',
//     city: 'VELA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7003',
//     city: 'MARIA IGNACIA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7009',
//     city: 'LA AURORA (IRAOLA-PDO. TANDIL)'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7009',
//     city: 'IRAOLA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7011',
//     city: 'SAN CALA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7013',
//     city: 'EGAÑA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7013',
//     city: 'DE LA CANAL'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7112',
//     city: 'LA POSTA'
//   },
//   {
//     code: '791',
//     department: 'TANDIL',
//     zip: '7112',
//     city: 'LA PROTECCION'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '6561',
//     city: 'SAN BERNARDO (PDO. TAPALQUE)'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'ALTONA'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'EL SAUCE'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'SANTA ROSA'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'EL MIRADOR'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'TAPALQUE'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'CAMPO ROJAS'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7303',
//     city: 'YERBAS'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7305',
//     city: 'COVELLO'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7305',
//     city: 'VELLOSO'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7305',
//     city: 'SAN GERVASIO'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7307',
//     city: 'CROTTO'
//   },
//   {
//     code: '798',
//     department: 'TAPALQUE',
//     zip: '7307',
//     city: 'REQUENA'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'KILOMETRO 26'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'VICEALMIRANTE E. MONTES'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'SOLANA DEL MONTE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'BARRIO DOCTOR RICARDO GUTIERREZ'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'BARRIO BAIRES'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1611',
//     city: 'DON TORCUATO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO RESIDENCIAL ESTANCIA GENERAL PACHECO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO ENRIQUE DELFINO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO EL EMBRUJO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'GENERAL PACHECO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO FERRINI'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO RODRIGUEZ'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'VILLA LAS TUNAS'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'KILOMETRO 31 (APEADERO FCGM)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO RICARDO ROJAS (GENERAL PACHECO-PDO. TIGRE)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'ALTO DEL TALAR'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO EL BOYERO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO LOS TRONCOS DEL TALAR'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'DOCTOR RICARDO ROJAS'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'LOPEZ CAMELO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO TRONCOS DEL TALAR'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1617',
//     city: 'BARRIO EL PEREJIL'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1618',
//     city: 'EL TALAR'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1621',
//     city: 'BENAVIDEZ'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1623',
//     city: 'PUNTA DE CANAL (APEADERO FCGM)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1623',
//     city: 'BARRIO PARQUE LAMBARE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1623',
//     city: 'DIQUE LUJAN'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1623',
//     city: 'LA GRACIELITA'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1648',
//     city: 'TIGRE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1648',
//     city: 'NUEVO PUERTO TIGRE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1648',
//     city: 'RINCON DE MILBERG                                                               '
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1648',
//     city: 'VILLA LA ÑATA'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO LUJAN (TIGRE-PDO. TIGRE)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO TIGRE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO CARABELAS'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'ARROYO LAS ROSAS (TIGRE-PDO. TIGRE)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO CAPITAN'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO PARANA DE LAS PALMAS'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO SARMIENTO'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO PARANA MINI'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO BARCA GRANDE'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO CARABELAS GRANDES'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'ARROYO MARTINEZ (TIGRE-PDO. TIGRE)'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RECREO EL MARQUES'
//   },
//   {
//     code: '805',
//     department: 'TIGRE',
//     zip: '1649',
//     city: 'RIO SAN ANTONIO'
//   },
//   {
//     code: '812',
//     department: 'TORDILLO',
//     zip: '7100',
//     city: 'ESQUINA CROTTO'
//   },
//   {
//     code: '812',
//     department: 'TORDILLO',
//     zip: '7101',
//     city: 'TORDILLO'
//   },
//   {
//     code: '812',
//     department: 'TORDILLO',
//     zip: '7101',
//     city: 'GENERAL CONESA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8000',
//     city: 'CHOIQUE'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'PIEDRA ECHADA (APEADERO FCGR)'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'EL CORTA PIE'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'ALFEREZ SAN MARTIN'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'EMPALME PIEDRA ECHADA (APEADERO FCGR)'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'VENANCIO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'PIEDRA ANCHA (DESVIO)'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'CHASICO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'NUEVA ROMA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'PELICURA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'PARAJE LA GRUTA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8117',
//     city: 'VILLA VENTANA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8118',
//     city: 'ESTOMBA'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8124',
//     city: 'BERRAONDO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8160',
//     city: 'TORNQUIST'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8160',
//     city: 'FUERTE ARGENTINO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8160',
//     city: 'FORTIN CHACO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8162',
//     city: 'TRES PICOS'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8162',
//     city: 'GARCIA DEL RIO'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8166',
//     city: 'SALDUNGARAY'
//   },
//   {
//     code: '819',
//     department: 'TORNQUIST',
//     zip: '8168',
//     city: 'SIERRA DE LA VENTANA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'BARRIO INDIO TROMPA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'LAGUNA REDONDA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'LA ZANJA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'MARI LAUQUEN'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'MARTIN FIERRO (PDO. TRENQUE LAUQUEN)'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'TRENQUE LAUQUEN'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'LAS GUASQUITAS'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6400',
//     city: 'LERTORA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6405',
//     city: 'CORAZZI'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6405',
//     city: '30 DE AGOSTO'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6407',
//     city: 'LA PORTEÑA (PDO. TRENQUE LAUQUEN)'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6407',
//     city: 'TRONGE'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6407',
//     city: 'GIRODIAS'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6422',
//     city: 'PRIMERA JUNTA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6424',
//     city: 'SAN RAMON (BERUTTI-PDO. TRENQUE LAUQUEN)'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6424',
//     city: 'BERUTTI'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'ATAHUALPA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'LA CARRETA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'VILLA ALDEANITA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'SANTA INES (LA CARRETA-PDO. TRENQUE LAUQUEN)'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'MOURAS'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'VILLA BRANDA'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6471',
//     city: 'LA MARGARITA (LA CARRETA-PDO. TRENQUE LAUQUEN)'
//   },
//   {
//     code: '826',
//     department: 'TRENQUE LAUQUEN',
//     zip: '6472',
//     city: 'SANTA CECILIA NORTE'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'LAS VAQUERIAS'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'LA TIGRA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'TRES ARROYOS'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'LA SORTIJA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'LA PASTORA (TRES ARROYOS-PDO. T. ARROYOS)'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'LA HORQUETA (TRES ARROYOS-PDO. TRES ARROYOS)'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'HUESO CLAVADO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'EL TRIANGULO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'EL CARRETERO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7500',
//     city: 'VILLA RODRIGUEZ'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'ORENSE'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'SAN ALBERTO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'LOS MOLLES'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'GENARO VALDES'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'EL CRISTIANO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7503',
//     city: 'LA FELICIANA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'VILLA CARUCHA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'BALNEARIO CLAROMECO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'SAN FRANCISCO DE BELLOCQ'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'ESTACION SAN FRANCISCO DE BELLOCQ'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'LIN-CALEL'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7505',
//     city: 'CLAROMECO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7507',
//     city: 'MICAELA CASCALLARES'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'BALNEARIO RETA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'COPETONAS'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'PUEBLO BALNEARIO RETA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'BALNEARIO OCEANO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'PASO DEL MEDANO'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7511',
//     city: 'RETA'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7519',
//     city: 'MAYOL'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7519',
//     city: 'SAN MAYOL'
//   },
//   {
//     code: '833',
//     department: 'TRES ARROYOS',
//     zip: '7519',
//     city: 'BARROW'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '',
//     city: 'LOMA HERMOSA'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1657',
//     city: 'PABLO PODESTA'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1674',
//     city: 'VILLA RAFFO'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1674',
//     city: 'SAENZ PEÑA'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1674',
//     city: 'VILLA SAENZ PEÑA'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1676',
//     city: 'SANTOS LUGARES'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1678',
//     city: 'CASEROS (PDO. 3 DE FEBRERO)'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1678',
//     city: 'TRES DE FEBRERO'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1678',
//     city: 'VILLA MATHEU'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1678',
//     city: 'VILLA PARQUE'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1682',
//     city: 'JOSE MARIA BOSCH'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1682',
//     city: 'MARTIN CORONADO'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1682',
//     city: 'VILLA BOSCH'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1684',
//     city: 'VILLA CIUDAD JARDIN LOMAS DEL PALOMAR'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1686',
//     city: 'PEREYRA (HURLINGHAM-PDO. 3 DE FEBRERO)'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1702',
//     city: 'JOSE INGENIEROS (PDO. 3 DE FEBRERO)'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1702',
//     city: 'CIUDADELA'
//   },
//   {
//     code: '840',
//     department: 'TRES DE FEBRERO',
//     zip: '1702',
//     city: 'VILLA JOSE INGENIEROS'
//   },
//   {
//     code: '847',
//     department: 'TRES LOMAS',
//     zip: '6337',
//     city: 'INGENIERO THOMPSON'
//   },
//   {
//     code: '847',
//     department: 'TRES LOMAS',
//     zip: '6409',
//     city: 'TRES LOMAS'
//   },
//   {
//     code: '847',
//     department: 'TRES LOMAS',
//     zip: '6409',
//     city: 'JOSE MARIA BLANCO'
//   },
//   {
//     code: '847',
//     department: 'TRES LOMAS',
//     zip: '6409',
//     city: 'PEHUELCHES'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6509',
//     city: 'DEL VALLE'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6511',
//     city: 'HUETEL'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6621',
//     city: 'ANDERSON'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6621',
//     city: 'GOBERNADOR UGARTE'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6660',
//     city: 'LAGUNA LAS MULITAS'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6660',
//     city: 'ORTIZ DE ROSAS'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6660',
//     city: '25 DE MAYO'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6660',
//     city: 'SANTIAGO GARBARINI'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6661',
//     city: 'BLAS DURAÑONA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6661',
//     city: 'PUEBLITOS'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6661',
//     city: 'SAN ENRIQUE'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6661',
//     city: 'MAMAGUITA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6661',
//     city: 'LUCAS MONTEVERDE'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6663',
//     city: 'JUAN VELA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6663',
//     city: 'NORBERTO DE LA RIESTRA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6665',
//     city: 'SAN JOSE (ERNESTINA-PDO. 25 DE MAYO)'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6665',
//     city: 'LA GLORIA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6665',
//     city: 'ERNESTINA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6665',
//     city: 'PEDERNALES'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'MARTIN BERRAONDO'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'LA RABIA'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'COLONIA INCHAUSTI'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'VALDES'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'AGUSTIN MOSCONI'
//   },
//   {
//     code: '854',
//     department: '25 DE MAYO',
//     zip: '6667',
//     city: 'ISLAS'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'PUENTE SAAVEDRA'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'JUAN B. JUSTO (ESTACION FCGM) (FLORIDA-PDO. VICENTE LOPEZ)'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'VICENTE LOPEZ'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'DOCTOR ANTONIO CETRANGOLO (PARADA FCGM)'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'FLORIDA'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1602',
//     city: 'ARISTOBULO DEL VALLE'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1603',
//     city: 'VILLA MARTELLI'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1605',
//     city: 'MUNRO'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1606',
//     city: 'CARAPACHAY'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1636',
//     city: 'LA LUCILA'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1636',
//     city: 'BORGES'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1636',
//     city: 'BARTOLOME MITRE (ESTACION FCGM)'
//   },
//   {
//     code: '861',
//     department: 'VICENTE LOPEZ',
//     zip: '1636',
//     city: 'OLIVOS'
//   },
//   {
//     code: '868',
//     department: 'VILLA GESELL',
//     zip: '7165',
//     city: 'MAR AZUL'
//   },
//   {
//     code: '868',
//     department: 'VILLA GESELL',
//     zip: '7165',
//     city: 'FARO QUERANDI'
//   },
//   {
//     code: '868',
//     department: 'VILLA GESELL',
//     zip: '7165',
//     city: 'AUTOCAMPING EL PINAR'
//   },
//   {
//     code: '868',
//     department: 'VILLA GESELL',
//     zip: '7165',
//     city: 'VILLA GESELL'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '1271',
//     city: 'VILLARINO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8132',
//     city: 'MEDANOS'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8132',
//     city: 'LA MASCOTA (PDO. VILLARINO)'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8132',
//     city: 'CABEZA DE BUEY'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'PASO CRAMER'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'MASCOTA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'LAS ESCOBAS'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'ARGERICH'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'LA GLEVA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'NICOLAS LEVALLE'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'LAGUNA CHASICO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8134',
//     city: 'COLONIA OCAMPO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'JUAN COUSTE'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'MONTES DE OCA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'ALGARROBO (PDO. VILLARINO)'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'COLONIA CUARENTA Y TRES'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'COLONIA LA CATALINA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'COLONIA JUAN COUSTE'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'LA CATALINA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'SAN EMILIO (ALGARROBO-PDO. VILLARINO)'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'LA CELINA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'LA EVA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'LA SOMBRA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8136',
//     city: 'LA BLANCA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'PUERTO COLOMA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA BARGA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'SAN ADOLIO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'OMBUCTA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA LA GRACIELA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'HILARIO ASCASUBI'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA EL GUANACO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA TAPATTA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA LOS ALAMOS'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'COLONIA SAN ADOLFO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8142',
//     city: 'PASO ALSINA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8144',
//     city: 'TENIENTE ORIGONE'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8146',
//     city: 'MAYOR BURATOVICH'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8146',
//     city: 'VILLA RIO CHICO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8146',
//     city: 'ISLA VERDE'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8146',
//     city: 'RADIOFARO EL RINCON'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8146',
//     city: 'EL RINCON (MAYOR BURATOVICH-PDO. VILLARINO)'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8148',
//     city: 'COLONIA BELLA VISTA'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8148',
//     city: 'PEDRO LURO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8148',
//     city: 'FORTIN MERCEDES'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8148',
//     city: 'FORTIN VIEJO'
//   },
//   {
//     code: '875',
//     department: 'VILLARINO',
//     zip: '8148',
//     city: 'LAS ISLETAS'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'BARRIO SAN JACINTO'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'VILLA ANGUS'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'ARROYO NEGRO (ZARATE-PDO. ZARATE)'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'ARROYO ÑACURUTU'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'CANAL MARTIN IRIGOYEN'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'VILLA MASSONI'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'ZARATE'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'VILLA FOX'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2800',
//     city: 'ARROYO BOTIJA FALSA'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2801',
//     city: 'ESCALADA'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2801',
//     city: 'EL TATU'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2801',
//     city: 'ALTO VERDE'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2806',
//     city: 'LIMA'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2806',
//     city: 'LAS PALMAS (ESTACION FCGM)'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2806',
//     city: 'FRIGORIFICO LAS PALMAS'
//   },
//   {
//     code: '882',
//     department: 'ZARATE',
//     zip: '2808',
//     city: 'ATUCHA'
//   }
// ]





var constants = require('../utils/cities');

const processedCities = constants.cities.map( city => {
  city.createdAt = new Date()
  city.updatedAt = new Date()
  return city
})







module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // let cities = [
    //   {
    //     code: "000",
    //     department: "LA PLATA",
    //     zip: "1900",
    //     city: "La Plata",
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ];

    return queryInterface.bulkInsert("Cities", processedCities);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Cities", null, {});
  }
};
