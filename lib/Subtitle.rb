class Subtitle

    def getSubtitle (number)
        begin
            system 'getsub --search-by i tt1091191 --force'
            system 'mv .srtt.* '+number+'.srt'
            return true
        rescue
            return false
        end
    end

end
