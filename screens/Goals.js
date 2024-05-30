import * as React from "react";
import {Image, StyleSheet, View, Pressable, Text} from "react-native";

const AndroidLarge5 = () => {
  	
  	return (
    		<View style={styles.androidLarge8}>
      			<Image style={styles.unionIcon} resizeMode="cover" source="Union.png" />
      			<Pressable style={[styles.ellipseParent, styles.groupChildLayout2]} onPress={()=>{}}>
        				<Image style={[styles.groupChild, styles.groupChildLayout2]} resizeMode="cover" source="Ellipse 41.png" />
        				<View style={[styles.groupParent, styles.groupParentLayout]}>
          					<View style={[styles.rectangleParent, styles.groupLayout2]}>
            						<View style={styles.groupItem} />
            						<View style={[styles.groupInner, styles.groupInnerLayout]} />
          					</View>
          					<View style={[styles.rectangleGroup, styles.groupPosition]}>
            						<View style={styles.rectangleView} />
            						<View style={[styles.groupInner, styles.groupInnerLayout]} />
            						<View style={[styles.groupChild2, styles.groupInnerLayout]} />
          					</View>
          					<View style={[styles.rectangleContainer, styles.groupParentLayout]}>
            						<View style={[styles.groupChild3, styles.groupChildTransform]} />
            						<View style={[styles.groupChild4, styles.groupChildTransform]} />
          					</View>
        				</View>
      			</Pressable>
      			<Pressable style={[styles.wrapper, styles.wrapperPosition]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 98.png" />
      			</Pressable>
      			<Pressable style={[styles.container, styles.wrapperPosition]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Group 100.png" />
      			</Pressable>
      			<Image style={[styles.androidLarge8Child, styles.wrapperPosition]} resizeMode="cover" source="Group 102.png" />
      			<Text style={styles.goals}> Goals</Text>
      			<Image style={styles.androidLarge8Item} resizeMode="cover" source="Group 104.png" />
      			<Pressable style={[styles.backArrrow, styles.groupChildLayout2]} onPress={()=>{}}>
        				<Image style={[styles.groupChild, styles.groupChildLayout2]} resizeMode="cover" source="Ellipse 23.png" />
        				<View style={[styles.groupView, styles.groupPosition]}>
          					<View style={[styles.groupChild5, styles.groupChildLayout]} />
          					<View style={[styles.groupChild6, styles.groupChildLayout]} />
        				</View>
      			</Pressable>
      			<View style={[styles.androidLarge8Inner, styles.groupInnerLayout]} />
    		</View>);
};

const styles = StyleSheet.create({
  	groupChildLayout2: {
    		width: 40,
    		height: 40,
    		position: "absolute"
  	},
  	groupParentLayout: {
    		height: 25,
    		position: "absolute"
  	},
  	groupLayout2: {
    		width: 6,
    		height: 25
  	},
  	groupInnerLayout: {
    		height: 1,
    		position: "absolute"
  	},
  	groupPosition: {
    		left: 8,
    		position: "absolute"
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
  	wrapperPosition: {
    		top: 725,
    		width: 40,
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 5,
    		borderRadius: 60,
    		transform: [
      			{
        				rotate: "-25deg"
      			}
    		],
    		backgroundColor: "#000",
    		position: "absolute"
  	},
  	unionIcon: {
    		width: 360,
    		height: 94
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
    		top: 2,
    		width: 4,
    		backgroundColor: "#fff",
    		borderRadius: 23,
    		left: 1,
    		height: 1
  	},
  	rectangleParent: {
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	rectangleView: {
    		backgroundColor: "#535353",
    		borderRadius: 1,
    		width: 6,
    		height: 25,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	groupChild2: {
    		top: 4,
    		width: 4,
    		backgroundColor: "#fff",
    		borderRadius: 23,
    		left: 1,
    		height: 1
  	},
  	rectangleGroup: {
    		width: 6,
    		height: 25,
    		top: 0
  	},
  	groupChild3: {
    		top: 3,
    		backgroundColor: "#3d718e",
    		width: 6,
    		height: 25,
    		left: 0
  	},
  	groupChild4: {
    		top: 22,
    		left: 10,
    		height: 2,
    		width: 4,
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
  	androidLarge8Child: {
    		left: 288,
    		height: 40
  	},
  	goals: {
    		top: 768,
    		left: 289,
    		fontSize: 12,
    		fontFamily: "Fredoka One",
    		color: "#fff",
    		textAlign: "left",
    		width: 39,
    		height: 12,
    		position: "absolute"
  	},
  	androidLarge8Item: {
    		top: 605,
    		left: 283,
    		width: 50,
    		height: 50,
    		position: "absolute"
  	},
  	groupChild5: {
    		top: 15,
    		width: 21,
    		left: 0
  	},
  	groupChild6: {
    		top: 12,
    		left: 4,
    		width: 20
  	},
  	groupView: {
    		top: 5,
    		width: 19,
    		height: 29
  	},
  	backArrrow: {
    		top: 16,
    		left: 16,
    		height: 40
  	},
  	androidLarge8Inner: {
    		top: 706,
    		borderStyle: "solid",
    		borderColor: "#000",
    		borderTopWidth: 1,
    		width: 361,
    		left: 0
  	},
  	androidLarge8: {
    		flex: 1,
    		height: 800,
    		overflow: "hidden",
    		width: "100%",
    		backgroundColor: "#fff"
  	}
});

export default AndroidLarge5;
