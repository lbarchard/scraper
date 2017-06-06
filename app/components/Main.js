// Include React
var React = require("react");
var ReactDOM = require("react-dom")

// Here we include all of the sub-components
var Saved = require("./body/Saved");
var Scraped = require("./body/Scraped");

// This is the main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {

    return {
      viewLabel: "View Saved",
	  viewSaved: true,
	  scrapedArticles: []
    };
  },
	// componentWillMount : function () {
	// 	var data = this.getData();
	// 	this.setState({data : data});
	// },
  
  toggleView: function() {
		if (this.state.viewSaved) {
			axios.get('/saved')
			.then(function (response) {
				console.log(response.data);
				this.setState({savedArticles: response.data})
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
			this.setState({ viewLabel: "View Scraped" })
			this.setState({viewSaved: false})
			ReactDOM.render(
				<Saved savedArticles={this.state.savedArticles}/>,
				document.getElementById('grid')
			);
		}
		else {
					// var data = []
		// this.render = this.render.bind(this);
			
			axios.get('/scraped')
				.then(function (response) {
					console.log(response.data);
					this.setState({scrapedArticles: response.data})
				}.bind(this))
				.catch(function (error) {
					console.log(error);
				});
			this.setState({ viewLabel: "View Saved" })
			this.setState({viewSaved: true})
			console.log(this.state.scrapedArticles)
			ReactDOM.render(
				<Scraped scrapedArticles={this.state.scrapedArticles}/>,
				document.getElementById('grid')
			);
		}

	
  },

  // Here we describe our component's render method
  render: function() {
    return (
		<div>
			<nav className="navbar navbar-default">
			<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span className="sr-only"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				</button>
				<div className="container-fluid">
					<div className="navbar-header">
					<a className="navbar-brand" href="#">
						<img alt="Scraper" width="30" height="30" src="\images\scraper.png"></img>
					</a>
					</div>
				</div>
			</div>
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav navbar-right">
				<li>
					<button onClick={this.toggleView} type="button" className="btn btn-primary">{this.state.viewLabel}</button>
				</li>
				</ul>
			</div>
			</div>
		</nav>
		<div id="grid">
		</div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
