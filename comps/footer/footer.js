import React from 'react';
import { Layout } from 'antd';
import './footer.css';
const {Footer} = Layout;
const FOOTER = () => ( 
    <Footer className ="footerFixed" >
       <section>
            <ul>
                <li>
                    Copyright © 2018 ServiceNow. All rights reserve
                </li>
            </ul>
        </section>
    </Footer>
);

export default FOOTER;