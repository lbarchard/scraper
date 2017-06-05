// Include React
var React = require("react");

// Create the Child1 Component
var Scraped = React.createClass({

  // Child1 has a state that keeps track of it's food value
  getInitialState: function() {
		return {
			scraped: [{
				id: 111,
				title: "This is a scraped article",
				link: "https://www.gizmag.com",
				note: "this was a note"
			},
			{
				id: 222,
				title: "This is Kurzweil title",
				link: "https://www.kurweilai.net",
				note: "this was a 2nd note"
			}]
    };
  },

  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (25 in this case)
  handleClick: function() {
		
  },

  render: function() {
		var data = this.state.scraped
		var scrapedArticles = 				
								data.map(function(row, index){
									return (
										<tr>
											<td key={row.id}><a href={row.link}>{row.title}</a></td>
										</tr>
									)
								})
    return (
		<table className="table table-bordered table-responsive">
			<thead>
				<tr>
				<th className="col-md-1">#</th>
				<th className="col-md-5">Title</th>
				<th className="col-md-1">Delete</th>
				</tr>
			</thead>
			<tbody>
				{scrapedArticles}
			</tbody>
		</table>
    );
  }
});

// Export the component back for use in other files
module.exports = Scraped;
