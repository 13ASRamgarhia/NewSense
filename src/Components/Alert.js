import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{position: 'relative', top: '4.35em'}}>
        <Alert.Heading>Oh snap! Can't fetch news anymore</Alert.Heading>
        <p>
          This app uses News API to fetch the news requested by the user. News API has changed their pricing model and requests cannot be made from the browser anymore. The solution is to send requests using Express server. We'll implement that soon. Till then, YOU CAN <strong>RUN THIS APP ON YOUR LOCALHOST</strong> (code available in the GitHub repository) to see functionalities of the app or check <strong>snapshots</strong> of the app in the GitHub repository.<br/><i>We are sorry for this bad experience, we'll resolve this soon.</i>
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissible;