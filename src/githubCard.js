import React from 'react';
import { Card, Progress, Image } from 'semantic-ui-react'


const GithubCard = (props) => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src={props.userInfo.avatar_url} />
      <Card.Header>{props.userInfo.name}</Card.Header>
      <Card.Meta>Company: {props.userInfo.company}</Card.Meta>
      <Card.Meta>Location: {props.userInfo.location}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <h4>Number of Repos:</h4>
      <Progress progress='value' value={props.userInfo.public_repos} total={props.progressInfo.total} color={props.progressInfo.color}/>
    </Card.Content>
  </Card>
)


export default GithubCard
