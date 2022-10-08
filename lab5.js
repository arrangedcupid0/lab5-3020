
function convertToAdjMatrix(list)
{
	var max = list.length;
	var matrix = new Array(list.length);
	for(var k = 0; k < list.length; k++)
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
