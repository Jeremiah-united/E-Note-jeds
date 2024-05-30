import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";

const AndroidLarge2 = () => {
  	
  	return (
    		<View style={styles.androidLarge7}>
      			<View style={[styles.androidLarge7Child, styles.androidChildLayout1]} />
      			<View style={[styles.androidLarge7Item, styles.androidChildLayout1]} />
      			<View style={[styles.androidLarge7Inner, styles.androidChildLayout1]} />
      			<View style={[styles.rectangleView, styles.androidChildLayout1]} />
      			<View style={[styles.androidLarge7Child1, styles.androidChildLayout1]} />
      			<Image style={styles.ellipseIcon} resizeMode="cover" source="Ellipse 40.png" />
      			<Image style={styles.unionIcon} resizeMode="cover" source="Union.png" />
      			<Text style={[styles.modules, styles.modulesLayout]}>Modules</Text>
      			<View style={[styles.ellipseParent, styles.groupChildLayout3]}>
        				<Image style={[styles.groupChild, styles.groupChildLayout3]} resizeMode="cover" source="Ellipse 41.png" />
        				<View style={[styles.groupParent, styles.groupParentLayout]}>
          					<View style={[styles.rectangleParent, styles.groupLayout1]}>
            						<View style={styles.groupItem} />
            						<View style={[styles.groupInner, styles.groupLayout]} />
          					</View>
          					<View style={[styles.rectangleGroup, styles.groupLayout1]}>
            						<View style={styles.groupChild1} />
            						<View style={[styles.groupInner, styles.groupLayout]} />
            						<View style={[styles.groupChild3, styles.groupLayout]} />
          					</View>
          					<View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            						<View style={[styles.groupChild4, styles.groupChildTransform]} />
            						<View style={[styles.groupChild5, styles.groupChildTransform]} />
          					</View>
        				</View>
      			</View>
      			<Pressable style={[styles.wrapper, styles.framePosition]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 98.png" />
      			</Pressable>
      			<Pressable style={[styles.container, styles.framePosition]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 100.png" />
      			</Pressable>
      			<Pressable style={[styles.frame, styles.framePosition]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 102.png" />
      			</Pressable>
      			<Pressable style={[styles.groupPressable, styles.modulesLayout]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 104.png" />
      			</Pressable>
      			<Pressable style={styles.backArrrow} onPress={()=>{}}>
        				<Image style={[styles.groupChild, styles.groupChildLayout3]} resizeMode="cover" source="Ellipse 23.png" />
        				<View style={styles.groupView}>
          					<View style={[styles.groupChild6, styles.groupChildLayout1]} />
          					<View style={[styles.groupChild7, styles.groupChildLayout]} />
        				</View>
      			</Pressable>
      			<View style={styles.lineView} />
      			<Text style={[styles.electricCircuitAnalysis, styles.computerNetworksTypo]}>ELECTRIC CIRCUIT ANALYSIS</Text>
      			<Text style={[styles.computerNetworks, styles.computerNetworksTypo]}>COMPUTER NETWORKS</Text>
      			<Text style={[styles.mathematicsForEngineers, styles.computerNetworksTypo]}>{`MATHEMATICS FOR ENGINEERS 3
`}</Text>
            <View style={styles.ellipseGroup}>
                <Image style={[styles.groupChild, styles.groupChildLayout3]} resizeMode="cover" source="Ellipse 24.png" />
                <View style={[styles.rectangleParent1, styles.groupChild10Position]}>
                    <View style={[styles.groupChild9, styles.groupChildLayout]} />
                    <View style={[styles.groupChild10, styles.groupChild10Position]} />
                    <View style={[styles.groupChild11, styles.groupChildLayout1]} />
                </View>
            </View>
            <View style={[styles.androidLarge7Child2, styles.androidChildLayout]} />
            <View style={[styles.androidLarge7Child3, styles.androidChildLayout]} />
        </View>);
};

const styles = StyleSheet.create({
    androidChildLayout1: {
        height: 79,
        width: 331,
        backgroundColor: "#d9d9d9",
        borderRadius: 360,
        left: 15,
        position: "absolute"
    },
    modulesLayout: {
        width: 50,
        position: "absolute"
    },
    groupChildLayout3: {
        width: 40,
        height: 40,
        position: "absolute"
    },
    groupParentLayout: {
        height: 25,
        position: "absolute"
    },
    groupLayout1: {
        width: 6,
        height: 25
    },
    groupLayout: {
        height: 1,
        borderRadius: 23,
        width: 4,
        left: 1,
        position: "absolute",
        backgroundColor: "#fff"
    },
    groupChildTransform: {
        transform: [
            {
                rotate: "-25deg"
            }
        ],
        borderRadius: 1,
        position: "absolute"
    },
    framePosition: {
        top: 725,
        width: 40,
        position: "absolute"
    },
    groupChildLayout1: {
        height: 4,
        backgroundColor: "#000"
    },
    groupChildLayout: {
        width: 21,
        height: 4,
        backgroundColor: "#000",
        position: "absolute"
    },
    computerNetworksTypo: {
        color: "#000",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600",
        fontSize: 16,
        textAlign: "left",
        position: "absolute"
    },
    groupChild10Position: {
        top: 9,
        position: "absolute"
    },
    androidChildLayout: {
        width: 46,
        borderTopWidth: 1,
        borderStyle: "solid",
        left: 16,
        height: 1,
        position: "absolute"
    },
    androidLarge7Child: {
        top: 81
    },
    androidLarge7Item: {
        top: 176
    },
    androidLarge7Inner: {
        top: 271
    },
    rectangleView: {
        top: 366
    },
    androidLarge7Child1: {
        top: 461
    },
    ellipseIcon: {
        left: -61,
        width: 76,
        height: 76,
        top: 706,
        position: "absolute"
    },
    unionIcon: {
        width: 383,
        height: 94
    },
    modules: {
        top: 768,
        left: 26,
        fontSize: 12,
        fontFamily: "Fredoka One",
        color: "#fff",
        height: 20,
        textAlign: "left",
        width: 50
    },
    groupChild: {
        left: 0,
        top: 0,
        height: 40
    },
    groupItem: {
        backgroundColor: "#000",
        borderRadius: 1,
        width: 6,
        height: 25,
        left: 0,
        top: 0,
        position: "absolute"
    },
    groupInner: {
        top: 2
    },
    rectangleParent: {
        left: 0,
        top: 0,
        position: "absolute"
    },
    groupChild1: {
        backgroundColor: "#535353",
        borderRadius: 1,
        width: 6,
        height: 25,
        left: 0,
        top: 0,
        position: "absolute"
    },
    groupChild3: {
        top: 4
    },
    rectangleGroup: {
        left: 8,
        top: 0,
        position: "absolute"
    },
    groupChild4: {
        top: 3,
        backgroundColor: "#3d718e",
        width: 6,
        height: 25,
        left: 0
    },
    groupChild5: {
        top: 22,
        left: 10,
        height: 2,
        width: 4,
        transform: [
            {
                rotate: "-25deg"
            }
        ],
        backgroundColor: "#fff"
    },
    rectangleContainer: {
        left: 14,
        width: 16,
        top: 0
    },
    groupParent: {
        top: 7,
        left: 6,
        width: 30
    },
    ellipseParent: {
        top: 724,
        left: 33,
        height: 40
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    wrapper: {
        left: 118,
        height: 41
    },
    container: {
        left: 203,
        height: 40
    },
    frame: {
        left: 288,
        height: 40
    },
    groupPressable: {
        left: 283,
        top: 605,
        height: 50
    },
    groupChild6: {
        top: 15,
        width: 22,
        borderRadius: 60,
        transform: [
            {
                rotate: "-25deg"
            }
        ],
        left: 0,
        position: "absolute"
    },
    groupChild7: {
        top: 13,
        left: 3,
        borderRadius: 60,
        transform: [
            {
                rotate: "-25deg"
            }
        ]
    },
    groupView: {
        top: 5,
        width: 18,
        height: 30,
        left: 9,
        position: "absolute"
    },
    backArrrow: {
        left: 16,
        top: 16,
        height: 40,
        width: 40,
        position: "absolute"
    },
    lineView: {
        borderColor: "#000",
        width: 361,
        borderTopWidth: 1,
        borderStyle: "solid",
        height: 1,
        left: 0,
        top: 706,
        position: "absolute"
    },
    electricCircuitAnalysis: {
        top: 111,
        left: 65
    },
    computerNetworks: {
        top: 206,
        left: 86
    },
    mathematicsForEngineers: {
        top: 295,
        left: 52,
        width: 264,
        height: 31
    },
    groupChild9: {
        borderRadius: 10000000,
        left: 1,
        width: 21,
        top: 0
    },
    groupChild10: {
        borderRadius: 1010000,
        width: 14,
        height: 4,
        backgroundColor: "#000",
        left: 8
    },
    groupChild11: {
        top: 18,
        borderRadius: 10000,
        width: 22,
        left: 0,
        position: "absolute"
    },
    rectangleParent1: {
        height: 22,
        width: 22,
        left: 9
    },
    ellipseGroup: {
        left: 306,
        top: 16,
        height: 40,
        width: 40,
        position: "absolute"
    },
    androidLarge7Child2: {
        top: 36,
        borderColor: "#fff"
    },
    androidLarge7Child3: {
        top: 37,
        borderColor: "#957171"
    },
    androidLarge7: {
        flex: 1,
        height: 800,
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#fff"
    }
});

export default AndroidLarge2;
