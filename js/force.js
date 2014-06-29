'use strict';

var w = 500;
var h = 300;

var dataset = {
	nodes: [
		{ name: 'lykke li' },
		{ name: 'baths' },
		{ name: 'foxes' },
		{ name: 'glass animals' },
		{ name: 'monogem' },
		{ name: 'max frost' },
		{ name: 'speak' },
		{ name: 'twin shadow' },
		{ name: 'slow no wake' }
	],
	edges: [
		{ source: 0, target: 1 },
		{ source: 0, target: 2 },
		{ source: 0, target: 3 },
		{ source: 1, target: 2 },
		{ source: 1, target: 4 },
		{ source: 2, target: 5 },
		{ source: 3, target: 4 },
		{ source: 4, target: 7 },
		{ source: 6, target: 3 },
		{ source: 6, target: 1 },
		{ source: 8, target: 6 },
		{ source: 8, target: 4 }
	]
};

var force = d3.layout.force()
	.nodes(dataset.nodes)
	.links(dataset.edges)
	.size([w, h])
	.linkDistance([50])
	.charge([-400])
	.start();

var colors = d3.scale.category10();

var svg = d3.select('.wrapper')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

var edges = svg.selectAll('.link')
	.data(dataset.edges)
	.enter()
	.append('line')
	.attr('class', 'link');

var nodes = svg.selectAll('.node')
	.data(dataset.nodes)
	.enter()
	.append('g')
	.attr('class', 'node')
	.style('fill', function(d, i) {
		return colors(i);
	})
	.call(force.drag);

nodes.append('circle')
	.attr('r', 10);

nodes.append('text')
	.attr('dx', 12)
	.attr('dy', '.35em')
	.text(function(d) { return d.name; });

force.on('tick', function() {
	edges
		.attr('x1', function(d) { return d.source.x; })
		.attr('y1', function(d) { return d.source.y; })
		.attr('x2', function(d) { return d.target.x; })
		.attr('y2', function(d) { return d.target.y; });

	nodes
		.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
});