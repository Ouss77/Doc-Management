import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 'auto',
    height: 'auto',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  field: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const PrescriptionDocument = ({ patientInfo }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <Image style={styles.image} src="docheader.png" />
      <View style={styles.section}>
        <Text style={styles.header}>Patient Information</Text>
        <Text style={styles.field}>Nom de patient: {patientInfo.name}</Text>
        <Text style={styles.field}>Maladie: {patientInfo.maladie}</Text>
        <Text style={styles.field}>Prescription: {patientInfo.prescription}</Text>
      </View>
    </Page>
  </Document>
);

export default PrescriptionDocument;
