import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history, showSearchController }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    showSearchController();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        style={{ height: 40 }}
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button type='submit' style={{ borderRadius: 5 }} className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
