import React, { Component } from "react";
import SHOP_DATA from "./shoppage-data";
import "../../pages/shoppage/shoppage-style.css";

import CollectionPreview from "../../components/collection-preview/collection-preview-component";

export class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherCollectionsProps }) => (
					<CollectionPreview key={id} {...otherCollectionsProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;