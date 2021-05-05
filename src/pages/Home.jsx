import React from "react";
import Code from  "../components/Code";
import axios from 'axios';
import FileBrowser, {Icons} from "react-keyed-file-browser"
//import   "./../stylesheets/FileBrowser.module.sass";
import '../../node_modules/react-keyed-file-browser/dist/react-keyed-file-browser.css';
//import import "../stylesheets/NestedFileBrowser.sass";

function EmptyRenderer() {     
  return ( <div></div> ) 
}

export default class App extends React.Component {
  
    state = {
        name: '', 
        content: '',
        extension: '',
        diagram: '',
        files: 
        //[]
        [
          {
            key: 'photos/animals/cat in a hat.png'            
          },
          {
            key: 'photos/animals/kitten_ball.png'
          },
          {
            key: 'photos/animals/elephants.png'
          },
          {
            key: 'photos/funny fall.gif' 
          },
          {
            key: 'photos/holiday.jpg'        
          },
          {
            key: 'documents/letter chunks.doc'        
          },
          {
            key: 'documents/export.pdf'        
          },
        ],
    } 

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.get("/clazz/"+ user.name, { user })
            .then(res => {
            console.log("["+res.data.extension+ "]");
            console.log(res.data.content );
            this.setState({
                content : res.data.content,
                extension :res.data.extension
                })
        })

        axios.get("/file/2")
            .then(res => {
            
            this.setState({
                files : res.data
                })
        })

        axios.get("/api/v1/sequence-diagram/71")
            .then(res => {
            console.log("["+res.data.extension+ "]");
            console.log(res.data.content );
            this.setState({
                 diagram: res.data
                })
        })
    }

    
    render() {
        return (
          
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                File Name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">click me</button>
            </form>
            
            <p>{this.state.extension}</p>  
            <p>{this.state.diagram}</p>  
              <div react-keyed-file-browser>
                <FileBrowser
                  files={this.state.files}
                  icons={Icons.FontAwesome(4)}                              
                  noFilesMessage="You don't have any files :("                  
                  detailRenderer={EmptyRenderer}
                />
               </div>
               <Code
                    children={this.state.content}
                    language={this.state.extension}
                    isDark = {true}
               />
              
          </div>

        )
      }
}
