import React from "react";
import { List, Card, Avatar } from "antd";

const { Meta } = Card;


const Videos = props => {
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 8
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    
                    // key={item.title}
                    
                    // actions={[
                    //     <IconText type="star-o" text="0" />,
                    //     <IconText type="like-o" text="0" />,
                    //     <IconText type="message" text="0" />
                    // ]}
                    // extra={
                    //     <img
                    //         width={272}
                    //         alt="logo"
                    //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    //     />
                    // }
                >

                    <Card 
                        hoverable
                        style={{ width: 240 }}
                        cover={<img style={{ width: 180 }} alt="thumbnail" src="https://www.enviroforensics.com/wp-content/uploads/2018/07/blue-play-button-768x780.png" />}
                    >
                        <Meta 
                            avatar={<Avatar src={item.avatar} />}
                            title={
                                <div>
                                    <a href={`/videos/${item.id}`}> {item.title}</a>
                                    <br></br>
                                    <a href=''> by Example</a>
                                </div>
                            }
                            description={item.content} 
                        />
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default Videos;
