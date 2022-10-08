
function convertToAdjMatrix(list)
{
	var max = 0;
	for(var i = 0; i < list.length; i++)
	{
		for(var j = 0; j < list[i].length; j++)
		{
			if(list[i][j] > max)
			{
				max = list[i][j];
			}
		}
	}
	var matrix = new Array(max);
	for(var k = 0; k < max; k++)
	{
		matrix[k] = new Array(max);
	}

	for(var l = 0; l < max; l++)
	{
		var m = 0;
		for(var n = 0; n < max; n++)
		{
			if(n == list[l][m])
			{
				matrix[l][n] = 1;
				m = m + 1;
			} else {
				matrix[l][n] = 0;
			}
		}
	}
	return matrix;
}

function testpls()
{
	var test1 = [[3,6,7],[1],[1,3,4],[2],[5,6],[7],[5]];
	console.log(convertToAdjMatrix(test1));
}
testpls();
