/**
 * Created by PhpStorm.
 * User: Peter
 * Date: 3/1/19
 * Time: 4:54 PM
 */
/**
 * Created by PhpStorm.
 * User: Peter
 * Date: 2/28/19
 * Time: 10:36 AM
 */
import React from 'react'
import Layout from '../Layout'
import fetch from "isomorphic-unfetch";
class Product extends React.Component {

    state = {
        data : null,
        loaded : false
    }

    setData(data){
        console.log(data)
        this.setState({
            data,loaded:true
        })
    }

    static async getInitialProps(context) {
        let id = context.query.id
        const res = await fetch('https://cody.pwa-commerce.com/simiconnector/rest/v2/products/'+id);
        const data = await res.json()
        return {...data}
    }

    renderContent = (data) => {
        console.log(data)
        return (
            <div className="product-detail container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="product-detail-img">
                            <img className="img-fluid" style={{height:330,objectFit:'contain'}} src={data.images[0].url} alt={data.name}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    render() {
        const data = this.props.product
        let header = {
            title : 'Product Detail'
        }
        if(data instanceof Object ){
            header['title'] = data.name
            header['description'] = data.description
        }
        return (
            <Layout header={header}>
                {this.renderContent(data)}
            </Layout>
        );
    }
}
export default Product