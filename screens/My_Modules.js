import * as React from "react";
import {Text, StyleSheet, Image, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Modules = () => {
  	
  	return (
    		<ScrollView style={styles.modules} >
      			<Text style={styles.modules1}>Modules</Text>
      			<View style={[styles.ellipseParent, styles.groupChildLayout]}>
        				<Image style={[styles.groupChild, styles.groupChildLayout]} resizeMode="cover" source="Ellipse 24.png" />
        				<View style={styles.rectangleParent}>
          					<View style={[styles.groupItem, styles.groupLayout]} />
          					<View style={[styles.groupInner, styles.groupLayout]} />
          					<View style={[styles.rectangleView, styles.groupLayout]} />
        				</View>
      			</View>
      			<Image style={styles.modulesChild} resizeMode="cover" source="Group 104.png" />
      			<Text style={styles.electronicsAndComputer}>ELECTRONICS AND COMPUTER ENGINEERING YEAR 2</Text>
    		<View style={styles.modulesInner}>
      			<View style={styles.rectangleGroup}>
        				<View style={styles.componentChild} />
        				<Image style={[styles.componentItem, styles.componentChildLayout]} resizeMode="cover" source="Rectangle 89.png" />
        				<View style={[styles.componentInner, styles.componentChildLayout]} />
        				<View style={[styles.componentChild1, styles.componentChildLayout]} />
        				<View style={[styles.componentChild2, styles.componentChildLayout]} />
        				<View style={[styles.componentChild3, styles.componentChildLayout]} />
        				<View style={[styles.componentChild4, styles.componentChildLayout]} />
        				<View style={[styles.componentChild5, styles.componentChildLayout]} />
        				<View style={[styles.componentChild6, styles.componentChildLayout]} />
        				<View style={[styles.componentChild7, styles.componentChildLayout]} />
        				<View style={[styles.componentChild8, styles.componentChildLayout]} />
        				<View style={[styles.componentChild9, styles.componentChildLayout]} />
        				<View style={[styles.componentChild10, styles.componentChildLayout]} />
        				
                        <Text style={styles.electricCircuitAnalysis}>ELECTRIC CIRCUIT ANALYSIS</Text>
        				<Text style={[styles.engineeringMathematicsIii, styles.computerTypo]}>ENGINEERING MATHEMATICS III</Text>
        				<Text style={[styles.academicLiteraacyIi, styles.computerTypo]}>ACADEMIC LITERACY II</Text>
                    <Text style={[styles.analogueElectronics, styles.analogueElectronicsTypo]}>ANALOGUE ELECTRONICS</Text>
                    <Text style={[styles.computerNetworks, styles.computerTypo]}>COMPUTER NETWORKS</Text>
                    <Text style={[styles.economicsForEngineers, styles.analogueElectronicsTypo]}>ECONOMICS FOR ENGINEERS</Text>
                    <Text style={[styles.workshopPractice, styles.computerTypo]}>WORKSHOP PRACTICE</Text>
                    <Text style={[styles.electricCircuitAnalysis1, styles.computerTypo]}>ELECTRIC CIRCUIT ANALYSIS II</Text>
                    <Text style={[styles.computerProgramming, styles.computerTypo]}>COMPUTER PROGRAMMING</Text>
                    <Text style={[styles.computerProgrammingIi, styles.computerTypo]}>COMPUTER PROGRAMMING II</Text>
                    <Text style={[styles.signalsAndSystems, styles.computerTypo]}>SIGNALS AND SYSTEMS</Text>
        				<Text style={[styles.measurementsAndInstrumentati, styles.computerTypo]}>MEASUREMENTS AND INSTRUMENTATIONS</Text>
                    <Text style={[styles.digitalElectronics, styles.computerTypo]}>DIGITAL ELECTRONICS</Text>
                </View>
            </View>
        </ScrollView>);
};

const styles = StyleSheet.create({
    groupChildLayout: {
        height: 40,
        width: 40,
        position: "absolute"
    },
    groupLayout: {
        height: 4,
        backgroundColor: "#000",
        position: "absolute"
    },
    componentChildLayout: {
        marginTop: 28,
        height: 79,
        borderRadius: 360,
        width: 331
    },
    computerTypo: {
        letterSpacing: 1,
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        color: "#000",
        fontSize: 16,
        position: "absolute"
    },
    analogueElectronicsTypo: {
        left: 51,
        letterSpacing: 1,
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        color: "#000",
        fontSize: 16,
        position: "absolute"
    },
    modules1: {
        top: 768,
        left: 26,
        fontSize: 12,
        fontFamily: "Fredoka One",
        color: "#fff",
        height: 20,
        width: 50,
        textAlign: "left",
        position: "absolute"
    },
    groupChild: {
        left: 0,
        top: 0
    },
    groupItem: {
        left: 1,
        borderRadius: 10000000,
        width: 21,
        top: 0
    },
    groupInner: {
        left: 8,
        borderRadius: 1010000,
        width: 14,
        top: 9
    },
    rectangleView: {
        top: 18,
        borderRadius: 10000,
        width: 22,
        left: 0
    },
    rectangleParent: {
        left: 9,
        height: 22,
        width: 22,
        top: 9,
        position: "absolute"
    },
    ellipseParent: {
        top: 16,
        left: 306,
        opacity: 0.5
    },
    modulesChild: {
        marginTop: 224,
        marginLeft: 130,
        top: "50%",
        height: 50,
        opacity: 0.4,
        left: "50%",
        width: 50,
        position: "absolute"
    },
    electronicsAndComputer: {
        top: 40,
        left: 79,
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        position: "absolute"
    },
    componentChild: {
        zIndex: 0,
        height: 79,
        borderRadius: 360,
        backgroundColor: "#d9d9d9",
        width: 331
    },
    componentItem: {
        zIndex: 1
    },
    componentInner: {
        zIndex: 2,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild1: {
        zIndex: 3,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild2: {
        zIndex: 4,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild3: {
        zIndex: 5,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild4: {
        zIndex: 6,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild5: {
        zIndex: 7,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild6: {
        zIndex: 8,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild7: {
        zIndex: 9,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild8: {
        zIndex: 10,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild9: {
        zIndex: 11,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    componentChild10: {
        zIndex: 12,
        backgroundColor: "#d9d9d9",
        marginTop: 28
    },
    electricCircuitAnalysis: {
        top: 25,
        left: 16,
        fontSize: 20,
        letterSpacing: 1.2,
        zIndex: 13,
        textAlign: "center",
        fontFamily: "ZenMaruGothic-Bold",
        fontWeight: "700",
        color: "#000",
        position: "absolute"
    },
    engineeringMathematicsIii: {
        top: 135,
        zIndex: 14,
        left: 37,
        letterSpacing: 1
    },
    academicLiteraacyIi: {
        top: 236,
        left: 65,
        zIndex: 15
    },
    analogueElectronics: {
        top: 346,
        zIndex: 16
    },
    computerNetworks: {
        top: 456,
        left: 63,
        zIndex: 17
    },
    economicsForEngineers: {
        top: 563,
        zIndex: 18
    },
    workshopPractice: {
        top: 670,
        left: 70,
        zIndex: 19
    },
    electricCircuitAnalysis1: {
        top: 778,
        left: 44,
        width: 254,
        height: 11,
        zIndex: 20
    },
    computerProgramming: {
        top: 884,
        left: 54,
        zIndex: 21
    },
    computerProgrammingIi: {
        top: 991,
        zIndex: 22,
        left: 37,
        letterSpacing: 1
    },
    signalsAndSystems: {
        top: 1098,
        left: 60,
        zIndex: 23
    },
    measurementsAndInstrumentati: {
        top: 1194,
        left: 80,
        zIndex: 24
    },
    digitalElectronics: {
        top: 1312,
        left: 78,
        zIndex: 25
    },
    rectangleGroup: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    modulesInner: {
        marginLeft: -165,
        top: 140,
        height: 581,
        width: 331,
        left: "50%",
        position: "absolute"
    },
    modules: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden"
    }
});

export default Modules;
