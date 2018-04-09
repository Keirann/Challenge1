import React from 'react';
import { Container,Box,Card,Title,Image,Media,CardContent,CardHeader,CardHeaderTitle,MediaLeft,MediaContent } from 'bloomer';
import { Field,Input,Control,FieldBody,FieldLabel,Button } from 'bloomer';


class RestaurantCardComponent extends React.Component {


  getMediaContent(condition){
    if(condition){
      return (
        <MediaContent>
        <Title style={{color:'red'}} isSize={4} >SoldOut!</Title>
        <Title  isSize={6}>This restaurant has hit maximum order Capacity which is ensured to establish quality</Title>
        </MediaContent>)
    }
    else{
      return (<MediaContent>
                <Field isHorizontal>
                    <FieldLabel isNormal>Delivery Time: </FieldLabel>

                    <FieldBody>
                    <Control hasIcons>
                      <Input isColor='success' placeholder='Text Input' readOnly={true} value= {this.props.info.dropoff} />

                     </Control>
                   </FieldBody>
                 </Field>
                <Field isHorizontal>
                   <FieldLabel isNormal>Order By: </FieldLabel>

                   <FieldBody>
                   <Control hasIcons>
                     <Input isColor='success' placeholder='Text Input' readOnly={true} value= {this.props.info.cutoff} />
                    </Control>
                  </FieldBody>
                </Field>
                <Field isHorizontal hasTextAlign='centered'>
                <Container isFluid style={{ marginTop: 10 }}><Button isColor='success' isOutlined>Select Restaurant</Button></Container>
                </Field>
                <Field isHorizontal>
                <SellingOut sellingOut={this.props.info.sellingOut} />
                </Field>
            </MediaContent>)
    }
  }
  render(){
    return (
      <Box>
      <Card >
          <CardHeader>
              <CardHeaderTitle>
                  {this.props.info.restaurantName}
              </CardHeaderTitle>

          </CardHeader>

          <CardContent>
              <Media>
                  <MediaLeft>
                      <Image isSize='256x256' src={this.props.info.logoUrl} />
                  </MediaLeft>

                  {this.getMediaContent(this.props.info.soldOut)}

              </Media>
          </CardContent>
      </Card>
      </Box>

    )
  }
}

function SellingOut(props) {
  if (!props.sellingOut) {
    return null;
  }

  return (
    <div className="warning">
    <Title style={{color:'red'}} isSize={6} >Hurry Only 5 meals left</Title>
    </div>
  );
}



export default RestaurantCardComponent;
