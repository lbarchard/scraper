// Include React
var React = require("react");
var SaveButton = require("./SaveButton");

// Create the Child1 Component
var Scraped = React.createClass({
  getInitialState: function() {

    return {
      viewLabel: "View Saved",
	  viewSaved: true,
	  scrapedArticles1: this.props.scrapedArticles
    };
  },
  handleClick: function() {
		
  },
  save: function(id) {
	axios.post('/save/' + id)
		.then(function (response) {
			console.log(response.data);
			this.setState({scrapedArticles1: response.data})
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		});
  },
  render: function() {
		var data = this.state.scrapedArticles1
		var scrapedArticlesTable = 	data.map(function(row, index){
			return (
				<tr>
					<td key={index}><a href={row.link}>{row.title}</a></td>
					<td  key={row._id}><button onClick={() => this.save(row._id)}>save</button></td>
				</tr>
			)
		}, this)
							
    return (
		<table className="table table-bordered table-responsive">
			<thead>
				<tr>
				<th className="col-md-8">Title</th>
				<th className="col-md-4">Save</th>
				</tr>
			</thead>
			<tbody>
				{scrapedArticlesTable}
			</tbody>
		</table>
    );
  }
});

// Export the component back for use in other files
module.exports = Scraped;
