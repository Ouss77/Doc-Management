import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

// Register the font
Font.register({
  family: 'Cairo',
  src: '/cairo/Cairo-Regular.ttf', // Adjust the path to your font file
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontFamily: "Helvetica",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    width: "40%",
  },
  headerText: {
    fontSize: 10,
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  headerT:{
    fontSize: 15,
    marginBottom: 30,
    marginLeft: 80,
    fontWeight: "bold",
    textDecoration: 'underline',

  },
  icon: {
    width: 60,
    height: 60,
    marginHorizontal: 20,
    marginBottom: 30,

  },
  section: {
  },
  field: {
    fontSize: 12,
    marginBottom: 20,
    fontWeight: "bold",

  },
  arabicText: {
    fontFamily: 'Cairo',
    fontSize: 10,
    textAlign: 'right',
  },
  arabicTitle: {
    fontFamily: 'Cairo',
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'right',
  },
  info:{
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,

  }
});

const PrescriptionDocument = ({ patientInfo }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headerTitle}>Docteur SASSOUR Mohammed</Text>
          <Text style={styles.headerText}>Ancien Médecin militaire lt Colonel</Text>
          <Text style={styles.headerText}>Médecine Générale</Text>
          <Text style={styles.headerText}>Médecine du sport</Text>
          <Text style={styles.headerText}>Maladies sexuellement transmissibles</Text>
          <Text style={styles.headerText}>N°2, 1er étage, angle Bdouvaud Mohamed V et Ibn Battouta, Guercif</Text>
          <Text style={styles.headerText}>Tel: 0672231406 / 0661255659</Text>
        </View>
        <Image style={styles.icon} src="/stéthoscope.png" />
        <View style={styles.textContainer}>
          <Text style={styles.arabicTitle}>الدكتور ساسور محمد</Text>
          <Text style={styles.arabicText}>طبيب عسكري لـ كولونيل سابقًا</Text>
          <Text style={styles.arabicText}>الطب العام</Text>
          <Text style={styles.arabicText}>طب الرياضة</Text>
          <Text style={styles.arabicText}>الأمراض المنقولة جنسياً</Text>
          <Text style={styles.arabicText}>ن°2، الطابق الأول، زاوية بدوفواد محمد الخامس وإبن بطوطة، جرسيف</Text>
          <Text style={styles.arabicText}>الهاتف: 0672231406 / 0661255659</Text>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.headerT}>Guercif Le : </Text>
      <Text style={styles.headerT}>Certificat Medical : </Text>
      <Text style={styles.info}>Je soussigné, SASSOUR MOHAMMED, docteur en médecine certifie avoir examiné ce jour le (la) nommé(e)</Text>
      <Text style={styles.field}>{patientInfo.name}</Text>
      <Text style={styles.info}>Son état de santé nécessite un traitement médical et un repos de</Text>

        <Text style={styles.field}>Maladie: {patientInfo.maladie}</Text>
        <Text style={styles.field}>Prescription: {patientInfo.prescription}</Text>
      </View>
    </Page>
  </Document>
);

export default PrescriptionDocument;
