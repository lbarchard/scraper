// Include React
var React = require("react");

// Create the Child1 Component
var SaveButton = React.createClass({

  handleClick: function() {
		
  },
  save: function(thing) {
	  console.log(thing)
  },
  render: function() {
		var data = this.props.scrapedArticles
		var thisThing = this
		console.log(thisThing)
		var scrapedArticlesTable = 	data.map(function(row, index){
			return (
				<tr>
					<td key={index}><a href={row.link}>{row.title}</a></td>
					<td onClick={thisThing.save} key={row._id}><button>save</button></td>
				</tr>
			)
		})
							
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
module.exports = SaveButton;
