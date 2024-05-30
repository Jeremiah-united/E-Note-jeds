import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { Color, FontFamily } from "../styles/Notsty";

const Notes = () => {
  	
  	return (
    		<View style={styles.notes}>
      			<Image style={styles.notesChild} resizeMode="cover" source="Group 36559.png" />
      			<Image style={styles.notesItem} resizeMode="cover" source="Frame 14.png" />
      			<Text style={[styles.tittle, styles.tittleFlexBox]}>Tittle..</Text>
      			<Text style={[styles.typeHere, styles.tittleFlexBox]}>type here..</Text>
      			<View style={[styles.ellipseParent, styles.groupChildLayout]}>
        				<Image style={[styles.groupChild, styles.groupChildLayout]} resizeMode="cover" source="Ellipse 24.png" />
        				<View style={styles.rectangleParent}>
          					<View style={[styles.groupItem, styles.groupLayout]} />
          					<View style={[styles.groupInner, styles.groupLayout]} />
          					<View style={[styles.rectangleView, styles.groupLayout]} />
        				</View>
      			</View>
      			<Image style={[styles.notesInner, styles.notesLayout]} resizeMode="cover" source="Frame 11.png" />
      			<Image style={[styles.frameIcon, styles.notesLayout]} resizeMode="cover" source="Frame 12.png" />
      			<Image style={[styles.notesChild1, styles.notesLayout]} resizeMode="cover" source="Frame 13.png" />
      			<Image style={styles.vectorIcon} resizeMode="cover" source="Vector.png" />
      			<Image style={[styles.rollbackOutlinedIcon, styles.groupChildLayout]} resizeMode="cover" source="rollback-outlined.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	tittleFlexBox: {
    		textAlign: "left",
    		color: Color.colorDarkslategray,
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 40,
    		width: 40,
    		position: "absolute"
  	},
  	groupLayout: {
    		height: 4,
    		backgroundColor: Color.colorBlack,
    		position: "absolute"
  	},
  	notesLayout: {
    		height: 27,
    		position: "absolute"
  	},
  	notesChild: {
    		top: 719,
    		left: 17,
    		width: 331,
    		height: 51,
    		position: "absolute"
  	},
  	notesItem: {
    		left: 215,
    		width: 30,
    		height: 29,
    		top: 114,
    		position: "absolute"
  	},
  	tittle: {
    		top: "21.63%",
    		left: "10%",
    		fontSize: 22,
    		fontWeight: "700",
    		fontFamily: FontFamily.robotoBold
  	},
  	typeHere: {
    		top: "26.25%",
    		left: "10.09%",
    		fontSize: 11,
    		fontFamily: FontFamily.robotoRegular
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
    		left: 306,
    		top: 16,
    		width: 40
  	},
  	notesInner: {
    		left: 39,
    		width: 27,
    		height: 27,
    		top: 114
  	},
  	frameIcon: {
    		top: 116,
    		left: 98,
    		width: 26
  	},
  	notesChild1: {
    		top: 112,
    		left: 156,
    		width: 27,
    		height: 27
  	},
  	vectorIcon: {
    		left: 277,
    		width: 25,
    		height: 25,
    		top: 114,
    		position: "absolute"
  	},
  	rollbackOutlinedIcon: {
    		left: 16,
    		top: 16,
    		width: 40,
    		overflow: "hidden"
  	},
  	notes: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default Notes;
