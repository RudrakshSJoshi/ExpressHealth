/** @format */

import image1 from "../utils/pneumonia/normal/IM-0117-0001.jpeg";
import image2 from "../utils/pneumonia/normal/IM-0129-0001.jpeg";
import image3 from "../utils/pneumonia/normal/IM-0135-0001.jpeg";
import image4 from "../utils/pneumonia/normal/IM-0141-0001.jpeg";
import image5 from "../utils/pneumonia/normal/IM-0147-0001.jpeg";
import image6 from "../utils/pneumonia/normal/IM-0151-0001.jpeg";
import image7 from "../utils/pneumonia/normal/IM-0154-0001.jpeg";
import image8 from "../utils/pneumonia/normal/IM-0162-0001.jpeg";
import image9 from "../utils/pneumonia/normal/IM-0166-0001.jpeg";
import image10 from "../utils/pneumonia/normal/IM-0168-0001.jpeg";

import pne1 from "../utils/pneumonia/pneumonia/1.jpeg";
import pne2 from "../utils/pneumonia/pneumonia/2.jpeg";
import pne3 from "../utils/pneumonia/pneumonia/3.jpeg";
import pne4 from "../utils/pneumonia/pneumonia/4.jpeg";
import pne5 from "../utils/pneumonia/pneumonia/5.jpeg";
import pne6 from "../utils/pneumonia/pneumonia/6.jpeg";
import pne7 from "../utils/pneumonia/pneumonia/7.jpeg";
import pne8 from "../utils/pneumonia/pneumonia/8.jpeg";
import pne9 from "../utils/pneumonia/pneumonia/9.jpeg";
import pne10 from "../utils/pneumonia/pneumonia/10.jpeg";

import cnv1 from "../utils/oct/cnv/1.jpeg";
import cnv2 from "../utils/oct/cnv/2.jpeg";
import cnv3 from "../utils/oct/cnv/3.jpeg";
import cnv4 from "../utils/oct/cnv/4.jpeg";
import cnv5 from "../utils/oct/cnv/5.jpeg";
import cnv6 from "../utils/oct/cnv/6.jpeg";
import cnv7 from "../utils/oct/cnv/7.jpeg";
import cnv8 from "../utils/oct/cnv/8.jpeg";
import cnv9 from "../utils/oct/cnv/9.jpeg";
import cnv10 from "../utils/oct/cnv/10.jpeg";

import dme1 from "../utils/oct/DME/1.jpeg";
import dme2 from "../utils/oct/DME/2.jpeg";
import dme3 from "../utils/oct/DME/3.jpeg";
import dme4 from "../utils/oct/DME/4.jpeg";
import dme5 from "../utils/oct/DME/5.jpeg";
import dme6 from "../utils/oct/DME/6.jpeg";
import dme7 from "../utils/oct/DME/7.jpeg";
import dme8 from "../utils/oct/DME/8.jpeg";
import dme9 from "../utils/oct/DME/9.jpeg";
import dme10 from "../utils/oct/DME/10.jpeg";

import dru1 from "../utils/oct/Drusen/1.jpeg";
import dru2 from "../utils/oct/Drusen/2.jpeg";
import dru3 from "../utils/oct/Drusen/3.jpeg";
import dru4 from "../utils/oct/Drusen/4.jpeg";
import dru5 from "../utils/oct/Drusen/5.jpeg";
import dru6 from "../utils/oct/Drusen/6.jpeg";
import dru7 from "../utils/oct/Drusen/7.jpeg";
import dru8 from "../utils/oct/Drusen/8.jpeg";
import dru9 from "../utils/oct/Drusen/9.jpeg";
import dru10 from "../utils/oct/Drusen/10.jpeg";

import nor1 from "../utils/oct/normal_retina/1.jpeg";
import nor2 from "../utils/oct/normal_retina/2.jpeg";
import nor3 from "../utils/oct/normal_retina/3.jpeg";
import nor4 from "../utils/oct/normal_retina/4.jpeg";
import nor5 from "../utils/oct/normal_retina/5.jpeg";
import nor6 from "../utils/oct/normal_retina/6.jpeg";
import nor7 from "../utils/oct/normal_retina/7.jpeg";
import nor8 from "../utils/oct/normal_retina/8.jpeg";
import nor9 from "../utils/oct/normal_retina/9.jpeg";
import nor10 from "../utils/oct/normal_retina/10.jpeg";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = (children) => {
	//=============================================================

	const chest = {
		normal: [
			{
				original: image1,
			},
			{
				original: image2,
			},
			{
				original: image3,
			},
			{
				original: image4,
			},
			{
				original: image5,
			},
			{
				original: image6,
			},
			{
				original: image7,
			},
			{
				original: image8,
			},
			{
				original: image9,
			},
			{
				original: image10,
			},
		],
		pneumonia: [
			{
				original: pne1,
			},
			{
				original: pne2,
			},
			{
				original: pne3,
			},
			{
				original: pne4,
			},
			{
				original: pne5,
			},
			{
				original: pne6,
			},
			{
				original: pne7,
			},
			{
				original: pne8,
			},
			{
				original: pne9,
			},
			{
				original: pne10,
			},
		],
	};

	const oct = {
		cnv: [
			{
				original: cnv1,
			},
			{
				original: cnv2,
			},
			{
				original: cnv3,
			},
			{
				original: cnv4,
			},
			{
				original: cnv5,
			},
			{
				original: cnv6,
			},
			{
				original: cnv7,
			},
			{
				original: cnv8,
			},
			{
				original: cnv9,
			},
			{
				original: cnv10,
			},
		],
		dme: [
			{
				original: dme1,
			},
			{
				original: dme2,
			},
			{
				original: dme3,
			},
			{
				original: dme4,
			},
			{
				original: dme5,
			},
			{
				original: dme6,
			},
			{
				original: dme7,
			},
			{
				original: dme8,
			},
			{
				original: dme9,
			},
			{
				original: dme10,
			},
		],
		drusen: [
			{
				original: dru1,
			},
			{
				original: dru2,
			},
			{
				original: dru3,
			},
			{
				original: dru4,
			},
			{
				original: dru5,
			},
			{
				original: dru6,
			},
			{
				original: dru7,
			},
			{
				original: dru8,
			},
			{
				original: dru9,
			},
			{
				original: dru10,
			},
		],
		normal: [
			{
				original: nor1,
			},
			{
				original: nor2,
			},
			{
				original: nor3,
			},
			{
				original: nor4,
			},
			{
				original: nor5,
			},
			{
				original: nor6,
			},
			{
				original: nor7,
			},
			{
				original: nor8,
			},
			{
				original: nor9,
			},
			{
				original: nor10,
			},
		],
	};
	//=========================================================

	console.log(children);
	return (
		<div>
			{children.length === "0" ? (
				<>
					<div>Cat1</div>
					<div>Cat2</div>
					<div>Cat3</div>
				</>
			) : null}
			{children.type === "chest" ? (
				<>
					<div>
						<h1>Normal</h1>
						<ImageGallery items={chest.normal} />
					</div>
					<div>
						<h1>Pneumonia</h1>
						<ImageGallery items={chest.pneumonia} />
					</div>
				</>
			) : null}
			{children.type === "eyeOct" ? (
				<>
					<div>
						<h1>Choroidal Neo Vascularization</h1>
						<ImageGallery items={oct.cnv} />
					</div>
					<div>
						<h1>DME</h1>
						<ImageGallery items={oct.dme} />
					</div>
					<div>
						<h1>Drusen</h1>
						<ImageGallery items={oct.drusen} />
					</div>
					<div>
						<h1>Normal</h1>
						<ImageGallery items={oct.normal} />
					</div>
				</>
			) : null}
		</div>
	);
};

export default Gallery;
