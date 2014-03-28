class Subtitle

    @@subtitleBasepath = '/tmp'

    def getSubtitle (number)
        begin
            system 'getsub --search-by i '+number+' --force'
            system 'mv .srtt.* '+number+'.srt'
            return true
        rescue
            return false
        end
    end

    private

    def moveSubtitle (subtitle)
        File.rename subtitle, @@subtitleBasepath+subtitle
        return @@subtitleBasepath+subtitle
    end

end
