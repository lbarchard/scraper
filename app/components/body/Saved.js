// Include React
var React = require("react");

// Create the Child1 Component
var Saved = React.createClass({
  getInitialState: function() {

    return {
			viewLabel: "View Scraped",
			viewSaved: false,
			savedArticles1: this.props.savedArticles,
			currentNote: ''
    };
  },

  saveNote: function(e) {
		console.log(e)
		console.log(e.target.value)
		this.setState({currentNote: e.target.value});
		console.log(e.target.ref)

		// console.log(note.target.value)
		// axios.post('/note/' + id)
		// 	.then(function (response) {
		// 		console.log(response.data);
		// 		this.setState({scrapedArticles1: response.data})
		// 	}.bind(this))
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
  },
  render: function() {
		var data = this.state.savedArticles1
		var thisNote = this.state.currentNote
		console.log(data)
		console.log("just logged")
		if (data != "undefined") {
		var savedArticles = 				
								data.map(function(row, index){
									var thisKey = row._id
									console.log(thisKey)
									return (
										<tr>
											<td key={row.id}><a href={row.link}>{row.title}</a></td>
											<td key={thisKey}><input ref={thisKey} value={thisNote} onChange={this.saveNote}></input></td>
										</tr>
									)
								}, this)
    return (
		<table className="table table-bordered table-responsive">
			<thead>
				<tr>
				<th ref="title" className="col-md-8">Title</th>
				<th className="col-md-4">Note</th>
				</tr>
			</thead>
			<tbody>
				{savedArticles}
			</tbody>
		</table>
    );
  }
}});

// Export the component back for use in other files
module.exports = Saved;
