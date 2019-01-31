[{title:  "Piper At The Gates of Dawn", artist: "Pink Floyd", description: "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom."}]

titles = [" Piper At The Gates of Dawn","title2","title3"]
artist = ["artist1","artist2","artist3"]

let final = [];
for (let i = 0; i <titles.length; i++) {
  final.push("title: ",titles[i],",'artist': ",artist[i])
}
console.log final;
