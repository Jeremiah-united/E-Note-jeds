import React, { useState } from "react";
import {Image, StyleSheet, View, Pressable, TextInput, Button, FlatList, Text} from "react-native";
import { Border, Color, FontFamily } from "../styles/NoteStyle";


const NoteTest = () => {
	const Note = ({ title, content }) => (
		<View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
		  <Text style={{ fontSize: 18 }}>{title}</Text>
		  <Text>{content}</Text>
		</View>
	  );
	const [notes, setNotes] = useState([]);
	const [newTitle, setNewTitle] = useState('');
	const [newContent, setNewContent] = useState('');
  
	const addNote = () => {
	  if (newTitle.trim() && newContent.trim()) {
		setNotes([...notes, { title: newTitle, content: newContent }]);
		setNewTitle('');
		setNewContent('');
	  }
	};  
  	
  	return (
    		<View style={styles.notetest}>
      			<Pressable style={[styles.backArrrow, styles.backLayout]} onPress={()=>{}}>
        				<Image style={[styles.backArrrowChild, styles.groupChildPosition]} resizeMode="cover" source="Ellipse 23.png" />
        				<View style={styles.rectangleParent}>
          					<View style={[styles.groupChild, styles.groupTransform]} />
          					<View style={[styles.groupItem, styles.groupItemLayout]} />
        				</View>
      			</Pressable>
      			<Image style={styles.notetestChild} resizeMode="cover" source="Group 36559.png" />
      			<Image style={[styles.ctaAttachFileIcon, styles.iconLayout]} resizeMode="cover" source="cta-attach-file.png" />
      			<Pressable style={styles.ctaSave} onPress={()=>{}}>
				  <Button title="Add Note" onPress={addNote} />
      			<FlatList
        		data={notes}
        		renderItem={({ item }) => <Note title={item.title} content={item.content} />}
        		keyExtractor={(item) => item.title}
      			/>
        				<Image style={[styles.icon, styles.iconLayout]} resizeMode="cover" source="cta-save.png" />
      			</Pressable>
				  <TextInput
        			value={newTitle}
        			onChangeText={setNewTitle}
        			placeholder="Note Title"
					style={[styles.tittle, styles.tittleFlexBox]}
      			/>
				  <TextInput
        			value={newContent}
        			onChangeText={setNewContent}
        			placeholder="Note Content"
        			multiline
        			style={[styles.typeHere, styles.tittleFlexBox]}
      			/>
      			<View style={[styles.ellipseParent, styles.backLayout]}>
        				<Image style={[styles.backArrrowChild, styles.groupChildPosition]} resizeMode="cover" source="Ellipse 24.png" />
        				<View style={[styles.rectangleGroup, styles.groupPosition]}>
          					<View style={[styles.rectangleView, styles.groupItemLayout]} />
          					<View style={[styles.groupChild1, styles.groupPosition]} />
          					<View style={[styles.groupChild2, styles.groupChildLayout]} />
        				</View>
      			</View>
      			<Image style={[styles.iconsolidreply, styles.iconsolidreplyLayout]} resizeMode="cover" source="Icon/Solid/reply.png" />
      			<Image style={styles.iconsolidreply1} resizeMode="cover" source="Icon/Solid/reply.png" />
      			<Image style={[styles.iconoutlinetrash, styles.iconsolidreplyLayout]} resizeMode="cover" source="Icon/Outline/trash.png" />
    		</View>);
};

const styles = StyleSheet.create({
  	backLayout: {
    		height: 40,
    		width: 40
  	},
  	groupChildPosition: {
    		left: 0,
    		position: "absolute"
  	},
  	groupTransform: {
    		transform: [
      			{
        				rotate: "-45deg"
      			}
    		],
    		borderRadius: Border.br_41xl
  	},
  	groupItemLayout: {
    		width: 21,
    		height: 4,
    		backgroundColor: Color.colorBlack,
    		position: "absolute"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden"
  	},
  	tittleFlexBox: {
    		textAlign: "left",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	groupPosition: {
    		top: 9,
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 4,
    		backgroundColor: Color.colorBlack
  	},
  	iconsolidreplyLayout: {
    		width: "7.5%",
    		height: "3.38%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	backArrrowChild: {
    		top: 0,
    		height: 40,
    		width: 40
  	},
  	groupChild: {
    		top: 15,
    		height: 4,
    		backgroundColor: Color.colorBlack,
    		width: 22,
    		left: 0,
    		position: "absolute"
  	},
  	groupItem: {
    		top: 13,
    		left: 3,
    		transform: [
      			{
        				rotate: "-45deg"
      			}
    		],
    		borderRadius: Border.br_41xl
  	},
  	rectangleParent: {
    		top: 5,
    		width: 18,
    		height: 30,
    		left: 9,
    		position: "absolute"
  	},
  	backArrrow: {
    		left: 16,
    		top: 16,
    		width: 40,
    		position: "absolute"
  	},
  	notetestChild: {
    		top: 720,
    		left: 14,
    		width: 331,
    		height: 51,
    		position: "absolute"
  	},
  	ctaAttachFileIcon: {
    		height: "3.58%",
    		width: "8.22%",
    		right: "32.06%",
    		bottom: "82.18%",
    		left: "59.72%",
    		top: "14.25%",
    		position: "absolute"
  	},
  	icon: {
    		height: "100%",
    		width: "100%",
    		maxWidth: "100%"
  	},
  	ctaSave: {
    		left: "76.82%",
    		top: "12.88%",
    		right: "10.68%",
    		bottom: "81.5%",
    		width: "12.5%",
    		height: "5.63%",
    		position: "relative"
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
  	rectangleView: {
    		left: 1,
    		borderRadius: 10000000,
    		top: 0
  	},
  	groupChild1: {
    		left: 8,
    		borderRadius: 1010000,
    		width: 14,
    		height: 4,
    		backgroundColor: Color.colorBlack
  	},
  	groupChild2: {
    		top: 18,
    		borderRadius: 10000,
    		width: 22,
    		left: 0,
    		position: "absolute"
  	},
  	rectangleGroup: {
    		height: 22,
    		width: 22,
    		left: 9
  	},
  	ellipseParent: {
    		left: 306,
    		top: 16,
    		width: 40,
    		position: "absolute"
  	},
  	iconsolidreply: {
    		right: "81.67%",
    		bottom: "82.38%",
    		left: "10.83%",
    		top: "14.25%"
  	},
  	iconsolidreply1: {
    		width: "7.22%",
    		top: "14.5%",
    		right: "65.56%",
    		bottom: "82.13%",
    		left: "27.22%",
    		height: "3.38%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconoutlinetrash: {
    		top: "14%",
    		right: "49.17%",
    		bottom: "82.63%",
    		left: "43.33%"
  	},
  	notetest: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 800,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default NoteTest;
