import React from 'react';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import './ExternalPage.css';

export default function HomePage() {
    return (
        <>
            <NavigationBar selectedTabName='External'/>
            <div className='external-page-container' >
                <div id="lightning"></div>

                <script src="https://rumml-dev-ed.lightning.force.com//lightning/lightning.out.js"></script>
                <script>
                    $Lightning.use("c:lwcVfDemoApp", function() {
                        $Lightning.createComponent("c:lwcVFDemo", {
                                objectName: "Contact"
                            },
                            "lightning",
                            function(cmp) {
                                console.log("LWC component was created");
                                // do some stuff
                            }
                        );
                        },
                    'https://rumml-dev-ed.lightning.force.com/'
                    );
                </script>
            </div>
        </>
    )
}
