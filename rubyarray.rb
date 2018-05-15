file = File.new("stop_words.txt", "r")
while (line = file.gets.chomp)
	puts "\"#{line}\","
end