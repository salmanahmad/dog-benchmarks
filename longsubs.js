

function longestCommonSubstring(string1, string2){
        // init max value
        var longestCommonSubstring = 0;
        // init 2D array with 0
        var table = Array(string1.length);
        for(a = 0; a <= string1.length; a++){
                table[a] = Array(string2.length);
                for(b = 0; b <= string2.length; b++){
                        table[a][b] = 0;
                }
        }
        // fill table
        for(var i = 0; i < string1.length; i++){
                for(var j = 0; j < string2.length; j++){
                        if(string1[i]==string2[j]){
                                if(table[i][j] == 0){
                                        table[i+1][j+1] = 1;
                                } else {
                                        table[i+1][j+1] = table[i][j] + 1;
                                }
                                if(table[i+1][j+1] > longestCommonSubstring){
                                        longestCommonSubstring = table[i+1][j+1];
                                }
                        } else {
                                table[i+1][j+1] = 0;
                        }
                }
        }
        return longestCommonSubstring;