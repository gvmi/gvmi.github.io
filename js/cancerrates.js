'use strict';

var w = 120;
var h = 120;

// radius data
var dataChildren = [ 39.25, 0, 7.75, 41, 0, 7, 51.5 ];
var dataMid = [ 11, 51.5, 17.25, 9.75, 13.25, 23, 45.75 ];
var dataOld = [ 8.75, 45.5, 25.25, 9.75, 27, 14.25, 46.75 ];

// area data
var areaC = [ 258, 0, 10, 280, 0, 8, 444 ];
var areaM = [ 20, 446, 50, 16, 29, 89, 350 ];
var areaO = [ 13, 346, 107, 16, 121, 31, 364 ];

var onMouseover = function() {
	var circ = d3.select(this);
	circ.transition().duration(300)
	.attr('fill', 'indianred');
};

var onMouseout = function() {
	var circ = d3.select(this);
	circ.transition().duration(300)
	.attr('fill', 'lightcoral');
};


var children = d3.selectAll('.col-md-3').filter('#children')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

children.append('circle')
	.data(dataChildren)
	.attr('cx', 57)
	.attr('cy', 55)
	.attr('r', function(d) { return d; })
	.attr('fill', 'lightcoral')
	.on('mouseover', onMouseover)
	.on('mouseout', onMouseout)
	.data(areaC)
	.append('svg:title')
	.text(function(d) { return d + ' girls'; });

var midAdults = d3.selectAll('.col-md-3').filter('#mid')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

midAdults.append('circle')
	.data(dataMid)
	.attr('cx', 57)
	.attr('cy', 55)
	.attr('r', function(d) {return d;})
	.attr('fill', 'lightcoral')
	.on('mouseover', onMouseover)
	.on('mouseout', onMouseout)
	.data(areaM)
	.append('svg:title')
	.text(function(d) { return d + ' middle-aged women'; });

var oldAdults = d3.selectAll('.col-md-3').filter('#old')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

oldAdults.append('circle')
	.data(dataOld)
	.attr('cx', 57)
	.attr('cy', 55)
	.attr('r', function(d) {return d;})
	.attr('fill', 'lightcoral')
	.on('mouseover', onMouseover)
	.on('mouseout', onMouseout)
	.data(areaO)
	.append('svg:title')
	.text(function(d) { return d + ' older women'; });