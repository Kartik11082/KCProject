import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import "./Courses.css";

function Courses() {
  return (
    <div className="courses__section">
      <div className="courses__title">
        <h1>Our Courses</h1>
      </div>
      <div className="courses__accordion">
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  fontWeight: "bold",
                  padding: "1rem",
                  border: "2px solid var(--sea-blue)",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Python
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <span>
                Core Python: Introduction & Fundamentals, Operators, Control
                Statements, Strings, Functions and Lists, Tuples, Sets &
                Dictionary Advanced Python: Classes, Objects & Inheritance,
                Method Overriding & Operator Overloading, Exception Handling &
                File Management, Modules & Packages and Decorators, Iterators &
                Generators. Data Structures: Stacks, Queues & Linked List, Tree
                Binary Search Tree (BST), Tree Traversals: InOrder, PreOrder &
                PostOrder. Graphs, Breadth First Search (BFS) and Depth First
                Search (DFS) Application Development: GUI App creation using
                tkinter, Layout Mgr: pack() & place() Widgets: Label, Entry,
                Button, Radiobutton, Checkbutton and CUI & GUI CRUD Operations.
                Databases: SQLite —- DDL & DML commands, CRUD, sqlite3 package,
                MongoDB — NoSQL database, CRUD pymongo package. Firebase — NoSQL
                Google Db Data Science: Data Extraction using requests & bs4, ,
                Data Analysis using pandas Data Visualization using matplotlib:
                Line and Bar Charts
              </span>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  fontWeight: "bold",
                  padding: "1rem",
                  border: "2px solid var(--sea-blue)",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                JSMERN
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Javascript: HTML, CSS, JS Basics, Operators, Input/Output,
                Control Statements, Strings, Functions, validations and fetch
                API. ReactJS: Virtual DOM, Component: Class Based and Function
                Based, Hooks: useState &useEffect, axios API, Validation: Basic
                and using formik, Routing using react-router-dom & sending Email
                Firebase: Authentication, One Time Password(OTP) and Database
                CRUD NodeJS: Intro., create Web Server, Node Package Manager,
                routing, filesystem, request and response and working with JSON
                data ExpressJS: Intro., using modules: express, body-parser,
                REST API: get, post, put and delete & Express Database CRUD
                Storage: MySQL: SQL based DB for CRUD, Mongo: NoSQL based DB for
                CRUD
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  fontWeight: "bold",
                  padding: "1rem",
                  border: "2px solid var(--sea-blue)",
                  borderRadius: "5px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                ML
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Introduction: Supervised ML, Unsupervised ML, Mathematical
                intuition & Problem Solving for every model. Data Preprocessing:
                Handling Missing Data, Handling Categorical Data, Feature
                Scaling, Split data into Train & Test and Feature Selection
                Regression: Simple Linear Regression, Multiple Linear
                Regression, Polynomial Regression, KNN Regression, Decision Tree
                Regression Classification & Clustering: Logistic Regression,
                Naive Bayes Classifieir, KNN Classifier, Decision Tree
                Classifier, Random Forest Classifier, Kmeans Clustering Flask:
                Flask Project, HTML, CSS and Template, SQLite and SQLiteAlchemy,
                Authentication, Email Deployment: Developing ML Model and
                Deployment(Making it Live) of Model using Flask.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Courses;
