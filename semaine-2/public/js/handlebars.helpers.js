Handlebars.registerHelper('hours', function(hours, minutes) {
  if (hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZWJhcnMuaGVscGVycy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsVUFBVSxDQUFDLGNBQVgsQ0FBMEIsT0FBMUIsRUFBbUMsU0FBQyxLQUFELEVBQVEsT0FBUixHQUFBO0FBQ2xDLEVBQUEsSUFBRyxLQUFBLElBQVMsQ0FBWjtBQUFtQixJQUFBLEtBQUEsR0FBUSxHQUFBLEdBQUksS0FBWixDQUFuQjtHQUFBO0FBQ0EsRUFBQSxJQUFHLE9BQUEsSUFBVyxDQUFkO0FBQXFCLElBQUEsT0FBQSxHQUFVLEdBQUEsR0FBSSxPQUFkLENBQXJCO0dBREE7U0FFQSxLQUFBLEdBQU0sR0FBTixHQUFVLFFBSHdCO0FBQUEsQ0FBbkMsQ0FBQSxDQUFBIiwiZmlsZSI6ImhhbmRsZWJhcnMuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMgSGFuZGxlYmFycyBoZWxwZXIgY29udmVydCB0byBoZXVyZTptaW5cclxuSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlciAnaG91cnMnLCAoaG91cnMsIG1pbnV0ZXMpIC0+XHJcblx0aWYgaG91cnMgPD0gOSB0aGVuIGhvdXJzID0gXCIwXCIraG91cnNcclxuXHRpZiBtaW51dGVzIDw9IDkgdGhlbiBtaW51dGVzID0gXCIwXCIrbWludXRlc1xyXG5cdGhvdXJzK1wiOlwiK21pbnV0ZXNcclxuIl19