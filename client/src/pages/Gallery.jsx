
// /** @format */

// import React from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { chest, oct } from "../utils/database";

// const Gallery = (children) => {
// 	console.log(children);
// 	return (
// 		<div>
// 			{children.length === "0" ? (
// 				<>
// 					<div>Cat1</div>
// 					<div>Cat2</div>
// 					<div>Cat3</div>
// 				</>
// 			) : null}
// 			{children.type === "chest" ? (
// 				<>
// 					<div>
// 						<h1>Normal</h1>
// 						<ImageGallery items={chest.normal} />
// 					</div>
// 					<div>
// 						<h1>Pneumonia</h1>
// 						<ImageGallery items={chest.pneumonia} />
// 					</div>
// 				</>
// 			) : null}
// 			{children.type === "eyeOct" ? (
// 				<>
// 					<div>
// 						<h1>Choroidal Neo Vascularization</h1>
// 						<ImageGallery items={oct.cnv} />
// 					</div>
// 					<div>
// 						<h1>DME</h1>
// 						<ImageGallery items={oct.dme} />
// 					</div>
// 					<div>
// 						<h1>Drusen</h1>
// 						<ImageGallery items={oct.drusen} />
// 					</div>
// 					<div>
// 						<h1>Normal</h1>
// 						<ImageGallery items={oct.normal} />
// 					</div>
// 				</>
// 			) : null}
// 		</div>
// 	);
// };

// export default Gallery;
