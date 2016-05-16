import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      // <div>
	     //  <ul>
	     //  	<li><Link activeClassName="active" onlyActiveOnIndex={true} to="/">List</Link></li>
	     //  	<li><Link activeClassName="active" to="/new">Create</Link></li>
	     //  	<li><Link activeClassName="active" to="/posts/1">Detail</Link></li>
	     //  </ul>

	     //  {this.props.children}
      // </div>
      <div>
      <nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Brand</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			            <li><Link activeClassName="active" onlyActiveOnIndex={true} to="/">Principal</Link></li>
			            <li><Link activeClassName="active" to="/new">Novo</Link></li>
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Outros <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><Link activeClassName="active" to="/posts/1">Detail</Link></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">Separated link</a></li>
			            <li role="separator" className="divider"></li>
			            <li><a href="#">One more separated link</a></li>
			          </ul>
			        </li>
			      </ul>
			      <form className="navbar-form navbar-left" role="search">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Buscar" />
			        </div>
			        <button type="submit" className="btn btn-default">Buscar</button>
			      </form>
			    </div>
			  </div>
			</nav>

			{this.props.children}
			</div>
    );
  }
}